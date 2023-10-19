"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductFormNew from "/app/components/ProductFormNew.jsx";

export default function EditPage({ params }) {
  const idUrl = params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!idUrl) {
      return;
    }
    axios.get(`/api/product?id=${idUrl}`).then((response) => {
      const fetchedProducts = response.data;
      const selectedProduct = fetchedProducts.find(
        (product) => product._id === idUrl
      );
      setProduct(selectedProduct);
      // console.log("Selected Product:", selectedProduct);
    });
  }, [idUrl]);

  return (
    <div>
    <h1 className="text-jimOrange text-2xl"></h1>
    {product ? (
      <ProductFormNew defaultValues={...product} createMode={false} viewMode={false} editMode={true}  />
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}
