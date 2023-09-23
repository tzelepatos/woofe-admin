"use client";
import axios from "axios";
import { useState } from "react";
import { redirect } from "next/navigation";

//components
import { InputWithLabel } from "@/app/components/InputWithLabel";
import { TextareaWithLabel } from "@/app/components/TextareaWithLabel";
import { Button } from "@/components/ui/button";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);

  async function createProduct(event) {
    event.preventDefault();
    const data = {
      productName,
      description,
      price,
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

        <Button variant="signIn" size="create" onSubmit={createProduct}>
          Save
        </Button>
      </form>
    </>
  );
}
