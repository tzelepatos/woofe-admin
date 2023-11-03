import { ReactSortable } from "react-sortablejs";
import Spinner from "../Spinner";
import axios from "axios";
import React, { useRef, useState } from "react";
import Image from "next/image";
//compoments
import {
  showDeletedFailImageToast,
  showDeletedSuccesfullImageToast,
} from "@/app/Components/ToastersCustom";
import FullImageModal from "@/app/components/form/FullImageModal";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const UploadImages = ({ onValueChange, defaultValue, disabled }) => {
  const [images, setImages] = useState(defaultValue || []);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent the default button behavior
    fileInputRef.current.click();
  };

  async function upLoad(event) {
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
      const uploadedImageUrls = res.data; // Get the uploaded image URLs from the response
      // Call the provided onValueChange function with the updated images
      setImages((existingUpload) => [...existingUpload, ...uploadedImageUrls]);
      onValueChange([...images, ...uploadedImageUrls]);

      //   console.log("Response from server:", res);
      //   console.log("Data sent to server:", data); // Log the data
      //   console.log("Uploaded image URLs:", uploadedImageUrls);
    }
    setIsUploading(false);
  }

  function updateImagesOrder(images) {
    setImages(images);
    onValueChange(images); // Call onValueChange with the updated images
  }

  function removeUpLoad(event, link) {
    event.preventDefault();
    event.stopPropagation();

    axios
      .delete("/api/deleteImage", { data: { link } })
      .then(() => {
        setImages((currentImages) =>
          currentImages.filter((val) => val !== link)
        );

        const updatedImages = images.filter((val) => val !== link);
        onValueChange(updatedImages); // Call onValueChange with the updated images
        showDeletedSuccesfullImageToast(link);
      })
      .catch((error) => {
        showDeletedFailImageToast(error);
        console.error("Error deleting image:", error);
      });
  }

  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center  text-foreground text-md xl:text-2xl">
          {disabled ? (
            <>
              View&nbsp;
              <strong>Images</strong>
              <Icons.image className="ml-2 h-5 w-5" />
            </>
          ) : (
            <>
              Add&nbsp;
              <strong>Images</strong>
              <Icons.image className="ml-2 h-5 w-5" />
            </>
          )}
        </h1>
        {/* button-input */}
        {!disabled ? (
          <div>
            <Input
              ref={fileInputRef}
              multiple
              type="file"
              onChange={(e) => {
                upLoad(e);
              }}
              className="hidden"
            ></Input>
            <Button
              variant="signIn"
              size="cancel"
              onClick={handleButtonClick}
              className="text-sm sm:text-base"
            >
              <Icons.upLoad className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              Upload
            </Button>
          </div>
        ) : null}
      </div>

      {!disabled && images.length > 1 && (
        <p className="mt-2 italic text-xs mb-2 text-slate-500">
          *You can re-order by drag and drop
        </p>
      )}
      <div className="mb-4 gap-3 flex flex-wrap ">
        <ReactSortable
          list={images}
          setList={updateImagesOrder}
          className="flex flex-wrap gap-3 "
          disabled={disabled}
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-24 relative"
                onClick={() => setSelectedImage(link)}
              >
                {!disabled && (
                  <button
                    onClick={(event) => removeUpLoad(event, link)}
                    className="absolute w-4 h-4  -top-1 -right-1 m-2 bg-gray-200 opacity-85 rounded-3xl text-gray-700 hover:text-[#ff8000]"
                  >
                    <Icons.removeUpLoad />
                  </button>
                )}
                {/* <AlertDelete removeUpLoad={removeUpLoad} link={link} /> */}

                <img
                  className="rounded-lg cursor-pointer"
                  src={link}
                  alt="hellolink"
                />
              </div>
            ))}
        </ReactSortable>
        {selectedImage && (
          <FullImageModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
        {isUploading && (
          <div
            className="w-24 h-24 border text-center justify-center
            text-sm gap-1 rounded-lg flex items-center"
          >
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImages;
