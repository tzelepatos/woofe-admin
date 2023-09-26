"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
});
//function to create a new product

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),

    defaultValues: {
      productName: "Grooming Store",
      description: "Grooming Store..",
      category: "Grooming",
      price: "6.00",
    },
    mode: "onChange",
  });
  //function to create a new product

  //function to submit the form

  async function onSubmit(data) {
    console.log(data);
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

    // await axios.post("/api/product", data);
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
                    placeholder="Tell us a little bit about yourself"
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

          <Button variant="signIn" size="create" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
}

export default ProfileForm;
