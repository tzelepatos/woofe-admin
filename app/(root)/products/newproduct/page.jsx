"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {ProductFormSchema} from "@/app/models/ProductFormSchema ";
import { useRouter  } from "next/navigation";
import { cn } from "@/lib/utils";

//compoments
import { Toggle } from "@/components/ui/toggle";
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
const daysOfWeek  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];




export default function NewPrduct() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),

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
      address: ["plataiwn 125",],
      city: "Athens",
      zipCode: "12345",
      email:["xaliamoutra@woofe.com"],
      phoneNumber: ["6986666666","2105912822"],
      website: "www.woofe.com",
      latitude: "37.983810",
      longitude: "23.727539",
      openingClosingHours: [{ day: "Monday", openingTimeEarly: "09:00", closingTimeEarly: "14:00", openingTimeLate: "17:00", closingTimeLate: "21:00" },
      ]
    },
    mode: "onChange",
  });

  const { fields: servicesFields, append: appendService, remove: removeService } = useFieldArray({
    name: "services", // First form's fields will be managed under the "services" name
    control: form.control,
  });
  
  const { fields: addressFields, append: appendAddress, remove: removeAddress } = useFieldArray({
    name: "address", // Second form's fields will be managed under the "address" name
    control: form.control,
  });
  const { fields: emailFields, append: appendEmail, remove: removeEmail } = useFieldArray({
    name: "email", // Second form's fields will be managed under the "email" name
    control: form.control,
  });
  const { fields: phoneNumberFields, append: appendphoneNumber, remove: removephoneNumber } = useFieldArray({
    name: "phoneNumber", // Second form's fields will be managed under the "email" name
    control: form.control,
  });
  
  

 
  async function onSubmit(data) {
   
  // console.log("ela to validation",validationResult);
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-1/2">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              //product name
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
                    className="resize"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
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
          <div className="border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
            {servicesFields.map((field, index) => (
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
              onClick={() => appendService("")}
            >
              Add new service
            </Button>
            <Button
              type="button"
              variant={servicesFields.length <= 1 ? "secondary" : "destructive"}
              size="sm"
              className="m-2"
              onClick={() => {
                if (servicesFields.length > 1) {
                  removeService(servicesFields.length - 1);
                }
              }}
            >
              Remove
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
        {/* address */}
        <div className="border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
            {addressFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`address.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Address
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add address to your product.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="plataiwn 125 " {...field} />
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
              onClick={() => appendAddress("")}
            >
              Add new service
            </Button>
            <Button
              type="button"
              variant={addressFields.length <= 1 ? "secondary" : "destructive"}
              size="sm"
              className="m-2"
              onClick={() => {
                if (addressFields.length > 1) {
                  removeAddress(addressFields.length - 1);
                }
              }}
            >
              Remove
            </Button>
                  {/* //city */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="enter a city" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
                    {/* zipCode */}
                    <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip code</FormLabel>
                <FormControl>
                  <Input placeholder="12462 " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          
          </div>
          {/* email */}
          <div className="border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
            {emailFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`email.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Email
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add email to your product.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="hello@gmail.com " {...field} />
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
              onClick={() => appendEmail("")}
            >
              Add new email
            </Button>
            <Button
              type="button"
              variant={emailFields.length <= 1 ? "secondary" : "destructive"}
              size="sm"
              className="m-2"
              onClick={() => {
                if (emailFields.length > 1) {
                  removeEmail(emailFields.length - 1);
                }
              }}
            >
              Remove
            </Button>
            </div>
             {/* phoneNumber */}
          <div className="border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
            {phoneNumberFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`phoneNumber.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Phone number
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add phoneNumber to your product.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="69835210001 " {...field} />
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
              onClick={() => appendphoneNumber("")}
            >
              Add new phoneNumber
            </Button>
            <Button
              type="button"
              variant={phoneNumberFields.length <= 1 ? "secondary" : "destructive"}
              size="sm"
              className="m-2"
              onClick={() => {
                if (phoneNumberFields.length > 1) {
                  removephoneNumber(phoneNumberFields.length - 1);
                }
              }}
            >
              Remove
            </Button>
          </div>
           {/* //website */}
            <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="enter a website" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2 border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
                             {/* latitude */}
                             <FormLabel>
                      Google Maps Coordinates
                    </FormLabel>
                 
                             <FormField
            control={form.control}
            name="latitude"
            render={({ field }) => (
              <FormItem>
                   <FormDescription>
                   Latitude
                    </FormDescription>
                <FormControl>
                  <Input placeholder="37.99209193041517 " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
            <FormDescription>
            Longitude
                    </FormDescription>
                             {/* longitude */}
                             <FormField
            control={form.control}
            name="longitude"
            render={({ field }) => (
              <FormItem>
               
                <FormControl>
                  <Input placeholder="23.759240569541465 " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /></div>


          {/* //openingHours */}
          <div className=" border border-accent rounded-md p-2 hover:border-jimGray hover:shadow-lg">
          <FormField
  control={form.control}
  name="openingHours"
  render={({ field }) => (
    <FormItem>
  <div className="flex justify-between">
    <div className="mr-4">
      <FormLabel>Opening Hours</FormLabel>
    </div>
    <div>
      <FormLabel>Closing Hours</FormLabel>
    </div>
  </div>
    <FormDescription>
      Add opening & closing hours to your product.
    </FormDescription>
     
      {daysOfWeek.map((day, index) => (
        <div key={index} className=" grid-y-2  ">
          <div className=""> 

            <span className=" gap-4 flex justify-normal">
            {day}
          <Toggle variant="destructive" size="sm" aria-label="Toggle italic">
            Closed
            </Toggle>
        </span>
          </div>
          {/* early */}
          <div className="container flex justify-between gap-2  ">
            <FormDescription>
                   open
           </FormDescription>
            <Input
              type="time"
              step="3600"
              {...field[`openingClosingHours[${index}].openingTimeLate`]}
              name={`openingClosingHours[${index}].openingTimeLate`}
              className="border border-accent rounded-md px-2 py-1 w-1/3"
         
            />
         <FormDescription>
      close
    </FormDescription>
          <Input
            type="time"
            step="3600"
            {...field[`openingClosingHours[${index}].closingTimeLate`]}
            name={`openingClosingHours[${index}].closingTimeLate`}
            className="border border-accent rounded-md px-2 py-1 w-1/3 "
          />
        </div>
         {/* late */}
        {/* <div className="container flex justify-between gap-2  ">
          late
          <Input
            type="time"
            {...field[`openingClosingHours[${index}].openingTimeEarly`]}
            name={`openingClosingHours[${index}].openingTimeEarly`}
            className="border border-accent rounded-md px-2 py-1 "
          />
       
          <Input
            type="time"
            {...field[`openingClosingHours[${index}].closingTimeEarly`]}
            name={`openingClosingHours[${index}].closingTimeEarly`}
            className="border border-accent rounded-md px-2 py-1 "
          />
        </div> */}
        </div>
      ))}
  <FormMessage />
    </FormItem>
  )}
/></div>
          <Button variant="signIn" size="create" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
}


