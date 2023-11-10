//compoments
import { Icons } from "@/components/ui/icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

const CreateNewProduct = ({ form, viewMode, editMode }) => {
  return (
    <div className="space-y-6  text-background bg-jimOrange container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <h1 className="flex items-center justify-start text-foreground text-lg xl:text-2xl">
        {editMode ? (
          <>
            Edit&nbsp;
            <strong>your Product</strong>
            <Icons.product className="ml-2 h-5 w-5" />
          </>
        ) : (
          <>
            {viewMode ? (
              <>
                View&nbsp;
                <strong>your Product</strong>
                <Icons.product className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Create a&nbsp;
                <strong>New Product</strong>
                <Icons.product className="ml-2 h-5 w-5" />
              </>
            )}
          </>
        )}
      </h1>

      {/* product name */}
      <FormField
        control={form.control}
        name="productName"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel>Product name</FormLabel>
            <FormControl>
              <Input
                placeholder="enter a product name"
                {...field}
                disabled={viewMode}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Description */}

      <div className=" w-full ">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your product..."
                  className="resize-none "
                  rows={5}
                  disabled={viewMode}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {/*Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex. 666.66€ "
                  {...field}
                  disabled={viewMode}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* newPrice */}
        <FormField
          control={form.control}
          name="newPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex. 666.66€ "
                  {...field}
                  disabled={viewMode}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className=" ">
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Info</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Optional additional Info..."
                  className="resize-none md:rows-15"
                  rows={5}
                  disabled={viewMode}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default CreateNewProduct;
