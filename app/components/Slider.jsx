"use client";
import { Icons } from "@/components/ui/icons";
import React, { useState } from "react";
import defaultImage from "@/assets/images/imageNotFound.svg";

export default function Slider(products) {
  // console.log("products", products);

  const [currentIndex, setCurrentIndex] = useState(0);

  let slides = products.products;
  //if no images in the array add default image
  if (slides.length === 0) {
    slides = [defaultImage.src];

    // console.log("slides", slides);
  }

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
    <div className="sm:w-[385px] sm:h-[250px] w-[300px] h-[200px] m-auto relative group">
      {slides.length > 0 && (
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-2 border-background relative"
        >
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer  ${
                  currentIndex === slideIndex ? "text-black" : "text-gray-500 "
                } `}
              >
                {slides.length > 1 && <Icons.dot />}
              </div>
            ))}
          </div>
        </div>
      )}
      {slides.length > 1 && (
        <>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <Icons.leftArrow onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <Icons.rightArrow onClick={nextSlide} size={30} />
          </div>
        </>
      )}
    </div>
  );
}
