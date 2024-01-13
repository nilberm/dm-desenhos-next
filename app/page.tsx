"use client";

import Caroulse from "@/src/components/Home/Carousel";
import { MainComponent } from "./style";

import image1 from "@/src/assets/images/carousel/image-1.jpg";
import image2 from "@/src/assets/images/carousel/image-2.jpg";
import image3 from "@/src/assets/images/carousel/image-3.jpg";
import Catalog from "@/src/components/Home/Catalog";

export default function Home() {
  const images = [image1, image2, image3];

  return (
    <MainComponent>
      <Caroulse images={images} />
      <Catalog />
    </MainComponent>
  );
}
