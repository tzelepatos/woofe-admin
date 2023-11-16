"use client";

import { useState } from "react";
import React from "react";

import Image from "next/image";

//shadcn
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  imageNames,
  getNextImageIndex,
  getPreviousImageIndex,
} from "@/app/components/users/ActionsUser";

export const UserImage = ({ name }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        src={imageNames[currentImageIndex].src}
        type="text"
        width={160}
        height={150}
        alt={"User avatar"}
      />
      <input
        type="hidden"
        name={name}
        value={imageNames[currentImageIndex].name}
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <Icons.leftArrow onClick={handlePrevious} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <Icons.rightArrow onClick={handleNext} size={30} />
      </div>
    </div>
  );
};
