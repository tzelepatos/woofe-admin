"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductFormEdit from "/app/components/ProductFormEdit.jsx";

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

  return <div>{product && <ProductFormEdit {...product} />}</div>;
}
