"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter  } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import UploadImages from "@/app/components/UploadImages";

const options = ["Grooming", "Services", "Supplies"];
// The profileFormSchema is used to validate the user's profile form data before sending it to the server.

const profileFormSchema = z.object({
  productName: z
    .string()
    .min(2, {
      message: "Product must be at least 2 characters.",
    })
    .max(30, {
      message: "Product must not be longer than 30 characters.",
    }),

  category: z.string({
    required_error: "Please select a Category.",
  }),

  description: z
    .string()
    .max(160, {
      message: "Description must not be longer than 160 characters.",
    })
    .min(10, {
      message: "Description must be at least 10 characters.",
    }),

  price: z.coerce
    .number()
    .max(999999, {
      message: "Only a millionaire will pay that much.",
    })
    .min(1, {
      message: "Price must be at least 1€.",
    }),
  newPrice: z.coerce
    .number()
    .max(999999, {
      message: "Only a millionaire will pay that much.",
    })
    .min(1, {
      message: "Price must be at least 1€.",
    }),

  services: z
    .array(
      z
        .string()
        .min(3, { message: "You must add at least 3 services" })
        .max(15, { message: "You can add up to 15 services" })
    )

    .optional(),
  info: z
    .string()
    .max(160, {
      message: "Info must not be longer than 160 characters.",
    })
    .min(10, {
      message: "Info must be at least 10 characters.",
    }),
  // images: z.any().optional(),
  images: z.any().optional(),

  // address: z.string().optional(),

  // zipCode: z.number().optional(),

  // mapCordA: z.number().optional(),

  // mapCordB: z.number().optional(),

  // favourite: z.boolean().optional(),

  // phoneNumber: z.string().optional(),

  // website: z.string().optional(),

  // openingHours: z.record(z.string()).optional(),

  // images: z.array(z.string()).optional(),

  // rating: z.number().min(0).max(5).optional(),

  // comments: z.string().optional(),

  // createdAt: z.date().optional(),
});
//function to create a new product

export function ProfileForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(profileFormSchema),

    defaultValues: {
      //randomize the values of productName with random letters
       
      productName: "Grooming Store-"+Math.random().toString(36).substr(2, 9),
      
 
      description: "A Brand new Grooming Store that..",
      category: "Grooming",
      price: "6.00",
      newPrice: "5.00",
      services: ["Nails", "Bath"],
      info: "Info about the store..",
      images: [],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    name: "services",
    control: form.control,
  });

 
  async function onSubmit(data) {
    // console.log("data object",data);
    //randomize the values of productName with random string after onSubmit(data)
    const randomString = Math.random().toString(36).substr(2, 9);
    form.setValue('productName', `Grooming Store-${randomString}`);
    
    // console.log("data image",data.images);
    toast({
      variant: "newProduct",
      title: "New product has created:",

      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4 ">
          <code className="text-foreground">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
    
      ),
      
    });

    // Make a POST request to /api/product
    try {
      const response = await axios.post("/api/product", data);
    
      // console.log("Response is:", response);
    
      if (response.status === 200 ) {
       
        router.push("/products");

      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
}
  

  return (
    <>
      <h1>New Product</h1>
      <p className="text-muted-foreground text-sm">create a new product</p>
      <br />
      <hr />
      <br />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              //product form
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="enter a product name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              //category form
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              //Description form
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your product..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              //Price form
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 666.66€ " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPrice"
            render={({ field }) => (
              //newPrice form
              <FormItem>
                <FormLabel>New Price</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 666.66€ " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* services */}
          <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`services.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Services
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add service to your product.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="Haircut " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append("")}
            >
              Add new service
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="m-2"
              onClick={() => {
                if (fields.length > 1) {
                  remove(fields.length - 1);
                }
              }}
            >
              Remove last service
            </Button>
          </div>
          <FormField
            control={form.control}
            name="info"
            render={({ field }) => {
              // console.log("field-info", field);
              return (
                //info
                <FormItem>
                  <FormLabel>Info</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="General info about product..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => {
              // console.log("field", field);
              return (
                //images form
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <UploadImages onValueChange={...field.onChange}  />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button variant="signIn" size="create" type="submit">
            Save
          </Button>

   
        </form>
      </Form>
    </>
  );
}

export default ProfileForm;
