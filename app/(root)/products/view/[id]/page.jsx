"use client";
import axios from "axios";
import { useEffect, useState } from "react";

//compoments
import ProductFormNew from "@/app/components/ProductFormNew";

export default function ViewPage({ params }) {
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
    });
  }, [idUrl]);
  
  //den doulevei sto update
  // function fetchIdUrl() {
  //   axios.get(`/api/product?id=${idUrl}`).then((response) => {
  //     const fetchedProducts = response.data;
  //     const selectedProduct = fetchedProducts.find(
  //       (product) => product._id === idUrl
  //     );
  //     setProduct(selectedProduct);
  //   });
  // }

  // if (idUrl) {
  //   fetchIdUrl();
  // }

  return (
    <div>
      <h1 className="text-jimOrange text-2xl"></h1>
      {product ? (
        <ProductFormNew defaultValues={...product} viewMode={true} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
