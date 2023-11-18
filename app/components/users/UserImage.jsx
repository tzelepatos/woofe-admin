"use client";

import { useState } from "react";
import React from "react";

import Image from "next/image";

//shadcn
import { Icons } from "@/components/ui/icons";
import {
  imageNames,
  getNextImageIndex,
  getPreviousImageIndex,
  getUserImage,
} from "@/app/components/users/ActionsUser";

export const UserImage = ({ name, user, edit }) => {
  const initialImageIndex = imageNames.findIndex(
    (image) => image.src === getUserImage(user?.image)
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(
    edit ? (initialImageIndex >= 0 ? initialImageIndex : 0) : 0
  );

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentImageIndex(getNextImageIndex(currentImageIndex));
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentImageIndex(getPreviousImageIndex(currentImageIndex));
  };

  return (
    <div className="relative group ">
      <Image
        className="rounded-full shadow-xl border-2 border-background cursor-pointer object-cover"
        src={
          edit && user.provider !== "credentials"
            ? edit && user?.image
            : imageNames[currentImageIndex].src
        }
        type="text"
        width={160}
        height={150}
        alt={"User avatar"}
      />
      <input
        type="hidden"
        name={name}
        value={(edit && user.image.name) || imageNames[currentImageIndex].name}
      />
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <Icons.leftArrow onClick={handlePrevious} size={30} />
      </div>
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <Icons.rightArrow onClick={handleNext} size={30} />
      </div>
    </div>
  );
};
