"use client";
import { Icons } from "@/components/ui/icons";
import React, { useState } from "react";

export default function Slider(firstImage) {
  // console.log("firstImage slider", firstImage.product);
  // const slides = firstImage.product;
  const slides = [
    {
      url: "https://woffe-upload.s3.amazonaws.com/1698948385253Supplies_mobile.jpg",
    },
    {
      url: "https://woffe-upload.s3.amazonaws.com/1698418694895Supplies_mobile.jpg",
    },
    {
      url: "https://woffe-upload.s3.amazonaws.com/1698943022113insta.png",
    },
    {
      url: "https://woffe-upload.s3.amazonaws.com/1698948356818mobile_page.jpg",
    },
    {
      url: "https://woffe-upload.s3.amazonaws.com/1698943030053sadDog.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" sm:w-[200px] sm:h-[200px] w-[300px] h-[200px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-2 border-background relative"
      >
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer  ${
                currentIndex === slideIndex
                  ? "text-jimOrange"
                  : "text-gray-500 "
              } `}
            >
              <Icons.dot />
            </div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full  bg-black/20 text-white cursor-pointer">
        <Icons.leftArrow onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full  bg-black/20 text-white cursor-pointer">
        <Icons.rightArrow onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
