import React, { useState } from "react";
import { CarouselComponent, CarouselItem, CarouselWrapper } from "./style";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface CaroulseProps {
  images: any[];
}
export default function Caroulse({ images }: CaroulseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <CarouselComponent>
      <CarouselWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <button className="navButton prevBtn" type="button" onClick={prevSlide}>
        <MdNavigateBefore />
      </button>
      <button className="navButton fwdBtn" type="button" onClick={nextSlide}>
        <MdNavigateNext />
      </button>
    </CarouselComponent>
  );
}
