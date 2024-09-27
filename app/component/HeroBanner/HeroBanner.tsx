import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import Container from "../Container";
import Carousel from "./Carousel";

export default async function HeroBanner() {
  return (
    <div className="flex h-full min-h-[660px] w-full bg-white">
      <Container className="flex" maxWidth="xl">
        <Carousel />
      </Container>
    </div>
  );
}

