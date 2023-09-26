"use client";
import axios from "axios";
import { useState } from "react";
import { redirect } from "next/navigation";

//components
import { InputWithLabel } from "@/app/components/InputWithLabel";
import { TextareaWithLabel } from "@/app/components/TextareaWithLabel";
import { Button } from "@/components/ui/button";
import { SelectDropDown } from "@/app/components/SelectDropDown";

const options = ["Grooming", "Services", "Supplies"];

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);

  //the function creates a new product with the data from the input form and then redirects to the product page

  async function createProduct(event) {
    event.preventDefault();

    const data = {
      productName,
      description,
      price,
      category,
      // image
    };

    await axios.post("/api/product", data);
    setGoToProducts(true);
  }
  //redirect after new product
  if (goToProducts) {
    // Perform client-side navigation to /products

    return redirect("/products");
  }

  return (
    <>
      {/* //globalcss */}
      <h1>New Product</h1>
      <p className="text-muted-foreground text-sm">create a new product</p>

      <br />
      <hr />
      <br />

      <form
        onSubmit={createProduct}
        //this className need change
        className="grid w-full max-w-sm items-center gap-2"
      >
        <InputWithLabel
          label="Product Name"
          inputProps={{
            id: "productName",
            type: "text",
            placeholder: "Enter product name",
          }}
          className="mt-1"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          isRequired={true}
        />
        <TextareaWithLabel
          label="Product Description"
          inputProps={{
            id: "description",
            type: "text",
            placeholder: "enter your product description..",
            required: true,
          }}
          className="mt-1"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          isRequired={true}
        />

        <InputWithLabel
          label="Price"
          inputProps={{
            id: "price",
            type: "number",
            placeholder: "ex. 38.22€ ",
            required: true,
          }}
          className="mt-1 w-1/2"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          isRequired={true}
        />
        {/* <InputWithLabel
          label="Category"
          inputProps={{
            id: "category",
            type: "string",
            placeholder: "Category ",
            required: true,
          }}
          className="mt-1 w-1/2"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          isRequired={true}
        /> */}
        <SelectDropDown
          label="Category"
          className="mt-1 w-1/2"
          value={category}
          onChange={(event) => {
            setCategory(event);
          }}
          isRequired={true}
          options={options}
        />

        <Button variant="signIn" size="create" onSubmit={createProduct}>
          Save
        </Button>
      </form>
    </>
  );
}
