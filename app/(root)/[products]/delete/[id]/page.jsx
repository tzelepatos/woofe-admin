"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteProductPage({ params }) {
  const router = useRouter();
  const [productName, setProductName] = useState(null);
  const idProduct = params.id;

  console.log("idProduct:", idProduct);

  useEffect(() => {
    if (!productName) {
      // Fetch the product details based on the ID
      axios.get(`/api/product?id=${idProduct}`).then((response) => {
        const product = response.data.find((item) => item._id === idProduct);
        if (product) {
          setProductName(product.productName);
        }
      });
    }
  }, [idProduct, productName]);

  //go back
  function goBack() {
    router.push("/products");
  }

  //delete
  async function deleteProduct() {
    try {
      // Fetch the product details, including image links
      const response = await axios.get(`/api/product?id=${idProduct}`);
      const product = response.data.find((item) => item._id === idProduct);

      // Delete the product from the backend
      await axios.delete(`/api/product`, { data: { _id: idProduct } });

      // Delete each image associated with the product from S3
      for (const imageLink of product.images) {
        await axios.delete("/api/deleteImage", { data: { link: imageLink } });
      }

      console.log("Product and images deleted successfully");
      goBack();
    } catch (error) {
      console.error("Error deleting product:", error);
      if (error.response) {
        console.log("Response Data:", error.response.data);
      }
    }
  }

  return (
    <>
      <h1 className="flex gap-2 justify-center">
        Do you really want to delete " {productName}" ?
      </h1>
      <div className="flex gap-2 justify-center">
        <button
          className="btn-red" // DELETE PRODUCT
          onClick={deleteProduct}
        >
          Yes{" "}
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </>
  );
}
