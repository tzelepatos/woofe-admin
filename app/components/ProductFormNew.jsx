"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//shadcn
import Alert from "@/app/components/Alert";
import AlertAction from "@/app/components/AlertAction";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

//compoments
import { ProductFormSchema } from "@/app/models/ProductFormSchema ";
import UploadImages from "@/app/components/form/UploadImages";
import NewTimePicker from "./form/NewTimePicker";
import ServicesTags from "./form/ServicesTags";
import CreateNewProduct from "./form/CreateNewProduct";
import PlaceInfo from "./form/PlaceInfo";
import ContactInfo from "./form/ContactInfo";

function ProductFormNew({ defaultValues, createMode, viewMode, editMode }) {
  // console.log("createMode:", createMode);
  const router = useRouter();

  //tags
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // const { fields: addressFields, append: appendAddress, remove: removeAddress } = useFieldArray({
  //   name: "address", // Second form's fields will be managed under the "address" name
  //   control: form.control,
  // });
  //update or create
  async function onSubmit(data) {
    const randomString = Math.random().toString(36).substr(2, 9);
    form.setValue("productName", `Grooming Store-${randomString}`);

    if (defaultValues._id) {
      // Update existing product
      try {
        const response = await axios.put("/api/product", {
          ...data,
          _id: defaultValues._id,
        });
        if (response.status === 200) {
          router.push("/products");
        }
      } catch (error) {
        console.error("Error updating form:", error);
      }
    } else {
      // Create a new product
      try {
        const response = await axios.post("/api/product", data);
        if (response.status === 200) {
          router.push("/products");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  }

  // console.log("defaultValues",defaultValues.services);

  return (
    <>
      <Form {...form}>
        <form
          id="product-form"
          onSubmit={form.handleSubmit(onSubmit)}
          // className="grid  grid-cols-1 md:grid-cols-2 gap-4 "
          className=" flex flex-col gap-4 pr-2 pl-2 items-stretch "
        >
          {/* New Product*/}
          <div className="flex flex-col lg:flex-row gap-4">
            <CreateNewProduct
              form={form}
              createMode={createMode}
              viewMode={viewMode}
              editMode={editMode}
            />

            {/* services */}
            <ServicesTags
              form={form}
              defaultValues={defaultValues}
              createMode={createMode}
              viewMode={viewMode}
              editMode={editMode}
            />
          </div>

          {/* Images */}
          <div className=" bg-jimGray  container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <UploadImages
                        onValueChange={field.onChange} //onValueChange={...field.onChange}
                        defaultValue={defaultValues.images} //defaultValue={...defaultValues.images}
                        disabled={viewMode}
                        editMode={editMode}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </div>

          {/* Place Info*/}
          <div className="flex flex-col lg:flex-row gap-4">
            <PlaceInfo form={form} viewMode={viewMode} editMode={editMode} />

            {/* Contact info */}

            <ContactInfo form={form} viewMode={viewMode} editMode={editMode} />
          </div>

          {/* Opening Hours */}
          <FormField
            control={form.control}
            name="openingClosingHours"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <NewTimePicker
                    form={form}
                    viewMode={viewMode}
                    {...field}
                    editMode={editMode}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            {editMode ? (
              <>
                {/* <Button
                  className="justify-self-end"
                  variant="signIn"
                  size="create"
                  type="submit"
                >
                  Update
                </Button> */}
                {/* <Alert /> */}
                <AlertAction actionType="update" />
              </>
            ) : (
              <>
                {createMode && ( // Add a condition for createMode
                  <Button
                    className="justify-self-end"
                    variant="signIn"
                    size="create"
                    type="submit"
                  >
                    Create
                  </Button>
                )}
              </>
            )}
          </div>
        </form>
      </Form>
    </>
  );
}

export default ProductFormNew;
