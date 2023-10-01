import React from "react";
import { ReactSortable } from "react-sortablejs";
import FullImageModal from "@/app/components/FullImageModal";
import Spinner from "./Spinner";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

const UploadImages = ({ onValueChange }) => {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [goToProducts, setGoToProducts] = useState(false);

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
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  }
  return (
    <div>
      <label className=" mt-2 text-md font-medium  text-slate-700">
        Photos
      </label>
      {images.length > 1 && (
        <p className="mt-2 italic text-xs mb-2 text-slate-500">
          *You can re-order by drag and drop
        </p>
      )}

      <div className="mb-4 gap-3 flex flex-wrap ">
        <ReactSortable
          list={images}
          setList={updateImagesOrder}
          className="flex flex-wrap gap-3 "
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-24 relative"
                onClick={() => setSelectedImage(link)}
              >
                <button
                  onClick={(event) => removeUpLoad(event, link)}
                  className="absolute w-4 h-4  -top-1 -right-1 m-2 bg-gray-200 opacity-85 rounded-3xl text-gray-700 hover:text-[#ff8000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
        <label
          className="w-24 h-24 border text-center flex flex-col items-center justify-center hover:border-orange-400 hover:text-orange-400
    text-sm gap-1 text-gray-500 rounded-lg bg-gray-50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
          <div>
            <Input
              multiple
              type="file"
              onChange={(e) => {
                upLoad(e);
              }}
              className="hidden"
            ></Input>
          </div>
        </label>{" "}
      </div>
    </div>
  );
};

export default UploadImages;
