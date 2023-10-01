"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductFormView from "../../../../components/ProductFormView";

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
      // console.log("Selected Product:", selectedProduct);
    });
  }, [idUrl]);

  return (
    <div>
      <h1 className="text-jimOrange  text-2xl">View Product</h1>
      {product && <ProductFormView {...product} />}
    </div>
  );
}
