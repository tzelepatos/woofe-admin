import { useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

//components
//components
import { InputWithLabel } from "@/app/components/InputWithLabel";
import { TextareaWithLabel } from "@/app/components/TextareaWithLabel";
import { Button } from "@/components/ui/button";
import SaveButton from "@/app/components/SaveButton";
import InputImages from "./InputImages";
import Alert from "@/app/components/Alert";

export default function ProductFormView({
  _id,
  productName: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
}) {
  const [productName, setProductName] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  async function updateProduct(event) {
    event.preventDefault();

    const data = {
      productName,
      description,
      price,
      images, //+1
    };

    if (_id) {
      // Update existing product
      await axios.put("/api/product", { ...data, _id });
    }

    setGoToProducts(true);
  }

  if (goToProducts) {
    return redirect("/products");
  }

  async function upLoadImages(event) {
    event.preventDefault();
    //spinner upload
    setIsUploading(true);

    // retrieves the selected files
    const files = event.target?.files;

    if (files?.length > 0) {
      //object to represent HTML form data
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);
      setImages((existingUpload) => {
        return [...existingUpload, ...res.data];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }

  function removeUpLoad(event, link) {
    event.preventDefault();
    event.stopPropagation();
    //pop up here the alert???<AlertDelete> compoment
    // Send DELETE request to the server
    axios
      .delete("/api/deleteImage", { data: { link } })
      .then(() => {
        // If deletion is successful, update the state to remove the deleted image
        setImages((currentImages) =>
          currentImages.filter((val) => val !== link)
        );
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  }

  return (
    <>
      <form onSubmit={updateProduct}>
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

        <InputImages
          images={images}
          updateImagesOrder={updateImagesOrder}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          isUploading={isUploading}
          upLoadImages={upLoadImages}
          removeUpLoad={removeUpLoad}
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
        {/* <SaveButton onSubmit={updateProduct} /> */}
        <Alert onSubmit={updateProduct} />
      </form>
    </>
  );
}
