"use client";

//shadcn
import { Icons } from "@/components/ui/icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ContactInfo = ({ form, viewMode }) => {
  return (
    <div className="space-y-4  text-background bg-groomingGreen container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl">
        Contact&nbsp;
        <strong>Info</strong>
        <Icons.info className="ml-2 h-5 w-5" />
      </h1>
      {/* phoneNumber */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          disabled={viewMode}
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="2105912822" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* mobile number */}
        <FormField
          disabled={viewMode}
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder="6983521000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* email  */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          disabled={viewMode}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="tsoumelekis@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email2  */}

        <FormField
          disabled={viewMode}
          control={form.control}
          name="email2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail 2</FormLabel>
              <FormControl>
                <Input placeholder="xaliamoutra@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* //website */}
      <FormField
        disabled={viewMode}
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
    </div>
  );
};

export default ContactInfo;
