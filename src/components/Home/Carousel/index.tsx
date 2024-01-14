"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
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
    <div className={style.carousel}>
      <div
        className={style.carouselWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={style.carouselItem} key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className={[style.navButton, style.prevBtn].join(" ")}
        type="button"
        onClick={prevSlide}
      >
        <MdNavigateBefore />
      </button>
      <button
        className={[style.navButton, style.fwdBtn].join(" ")}
        type="button"
        onClick={nextSlide}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}
