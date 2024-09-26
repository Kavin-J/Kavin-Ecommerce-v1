"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import WrapersCarousel from "./WrapersCarousel";
import Hero1 from "./HeroItems/Hero1";
import Hero2 from "./HeroItems/Hero2";

export default function Carousel() {
  return (
    <div className="flex h-full w-full">
      <WrapersCarousel>
        <Hero1 />
        <Hero2 />
      </WrapersCarousel>
    </div>
  );
}
