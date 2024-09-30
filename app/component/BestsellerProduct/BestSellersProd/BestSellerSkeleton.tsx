// "use client";
import Image from "next/image";
import React from "react";
import { Product, Rating } from "../BestSeller";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

type Props = {};

export default function BestSellerProducts({}: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-7 w-full rounded-md bg-white p-2 md:grid-cols-2 md:p-6 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="flex w-full h-[550px] justify-center bg-zinc-50 animate-pulse ">
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
}
