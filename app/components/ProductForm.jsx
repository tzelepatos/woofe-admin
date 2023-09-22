"use client";
import axios from "axios";
import { useState } from "react";
import { redirect } from "next/navigation";

//components
import InputProduct from "@/app/components/InputProduct";
import InputProductDesc from "@/app/components/InputProductDesc";
import InputListCategory from "@/app/components/InputListCategory";
import InputPrice from "@/app/components/InputPrice";
import SaveButton from "@/app/components/SaveButton";

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
      // image,
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
      <form onSubmit={createProduct}>
        <InputProduct
          productName={productName}
          setProductName={setProductName}
        />
        <InputProductDesc
          description={description}
          setDescription={setDescription}
        />
        <InputPrice price={price} setPrice={setPrice} />
        <InputListCategory />{" "}
        {/* Are you planning to use this component later? */}
        <SaveButton onSubmit={createProduct} />
      </form>
    </>
  );
}
