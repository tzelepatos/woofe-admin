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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const options = ["Grooming", "Services", "Supplies"];

const CreateNewProduct = ({ form, viewMode, editMode, onCategoryChange }) => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
        <div className="col-span-2 ">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your product..."
                    className="resize-none md:rows-15"
                    rows={10}
                    disabled={viewMode}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col  justify-between gap-4 ">
          {/* category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                {/* <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={viewMode}
                > */}
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    onCategoryChange(value); // Set selected category
                  }}
                  defaultValue={field.value}
                  disabled={viewMode}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        disabled={viewMode}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
      </div>
    </div>
  );
};

export default CreateNewProduct;
