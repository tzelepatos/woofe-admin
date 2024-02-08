"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

//shadcn
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

//compoments
import {
  showUpdateToast,
  showSuccessToast,
  showFailToast,
} from "@/app/components/ToastersCustom";
import AlertAction from "@/app/components/AlertAction";
import { ProductFormSchema } from "@/app/models/ProductFormSchema ";
import UploadImages from "@/app/components/form/UploadImages";
import NewTimePicker from "./form/NewTimePicker";
import ServicesTags from "./form/ServicesTags";
import CreateNewProduct from "./form/CreateNewProduct";
import PlaceInfo from "./form/PlaceInfo";
import ContactInfo from "./form/ContactInfo";
import Categories from "./form/Categories";

function ProductFormNew({
  defaultValues,
  createMode,
  viewMode,
  editMode,
  categories,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // Add a state for the temporary ID
  const [tempId, setTempId] = useState(
    "temp_" + new Date().getTime() + Math.random()
  );
  // console.log("defaultValues", defaultValues);

  //tags
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data) {
    const { categories, ...productData } = data;
    // console.log("first data", data);
    console.log("ON SUBMIT IMAGES ", productData.images);
    // console.log("categories", categories);
    // console.log("productData", productData);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const randomString = Math.random().toString(36).substr(2, 9);
    form.setValue("productName", `Grooming Store-${randomString}`);

    if (defaultValues._id) {
      // Update existing product
      try {
        const response = await axios.put("/api/product", {
          ...productData,
          images: productData.images,
          categories: categories,
          categoriesID: defaultValues.categories._id,
          _id: defaultValues._id,
        });
        if (response.status === 200) {
          showUpdateToast(data);
          router.back();
          router.refresh(); //i dont  like it, i must change it
        }
      } catch (error) {
        showFailToast(error);
        console.error("Error updating form:", error);
      }
    } else {
      // Create a new product
      try {
        // const tempId = "temp_" + new Date().getTime() + Math.random();
        const response = await axios.post("/api/product", {
          ...productData,
          categories,
          tempId,
        });
        if (response.status === 200) {
          const productImages = response.data.images;
          const productId = response.data._id; // Get the product ID from the response

          // Move the images and get the new image links
          const moveResponse = await axios.post("/api/moveImage", {
            tempId,
            productId,
            productImages,
          });
          const newImageLinks = moveResponse.data; // Get the new image links from the response

          // Update the product with the new image links
          await axios.put("/api/product", {
            images: newImageLinks, // Update the image links
            _id: productId, // Use the product ID as the _id
          });

          showSuccessToast(data);
          router.back();
          router.refresh(); //i dont  like it, i must change it
        }
      } catch (error) {
        showFailToast(error);
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
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          // className="grid  grid-cols-1 md:grid-cols-2 gap-4 "
          className="flex flex-col gap-4 pr-2 pl-2  "
        >
          {/* New Product*/}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <CreateNewProduct
                form={form}
                createMode={createMode}
                viewMode={viewMode}
                editMode={editMode}
              />
            </div>
            {/* Images */}
            <div className="flex-grow bg-jimGray border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <UploadImages
                          product={defaultValues}
                          onValueChange={field.onChange} //onValueChange={...field.onChange}
                          defaultValue={defaultValues.images} //defaultValue={...defaultValues.images}
                          disabled={viewMode}
                          editMode={editMode}
                          setTempId={setTempId}
                          tempId={tempId}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>

            {/* <ServicesTags
              form={form}
              defaultValues={defaultValues}
              createMode={createMode}
              viewMode={viewMode}
              editMode={editMode}
            /> */}
          </div>

          {/* Categories */}
          <Categories
            form={form}
            defaultValues={defaultValues}
            createMode={createMode}
            viewMode={viewMode}
            editMode={editMode}
            categories={categories}
          />

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
                <AlertAction actionType="update" isLoading={isLoading} />
              </>
            ) : (
              <>
                {createMode && ( // Add a condition for createMode
                  <Button
                    className="justify-self-end"
                    variant="signIn"
                    size="create"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
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
