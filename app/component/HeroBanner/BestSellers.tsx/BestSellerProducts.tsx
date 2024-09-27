// "use client";
import Image from "next/image";
import React from "react";
import { Product, Rating } from "../../Products/BestsellerProduct/BestSeller";
import ProductCard from "../../Products/ProductCard";

type Props = { products: Product[] };

export default function BestSellerProducts({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-7  rounded-md bg-white p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {products
        .filter((item, i) => item.category !== "electronics")
        .slice(0,12)
        .map((item, index) => (
          <div className="flex min-w-60 justify-center bg-zinc-50">
            <ProductCard key={item.id} {...item} />
          </div>
        ))}
    </div>
  );
}
