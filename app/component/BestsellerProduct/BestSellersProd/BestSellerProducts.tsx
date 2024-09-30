// "use client";
import Image from "next/image";
import React from "react";
import { Product, Rating } from "../BestSeller";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

type Props = {};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function BestSellerProducts({}: Props) {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = (await res.json()) as Product[];
  return (
    <div className="grid w-full grid-cols-1 gap-x-3  gap-y-7 rounded-md bg-white p-2 md:grid-cols-2 md:p-6 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ">
      {products
        .filter((item, i) => item.category !== "electronics")
        .slice(0, 12)
        .map((item, index) => (
          <div
            key={item.id}
            className="flex min-w-64 justify-center bg-zinc-50"
          >
            <ProductCard {...item} />
          </div>
        ))}
    </div>
  );
}
