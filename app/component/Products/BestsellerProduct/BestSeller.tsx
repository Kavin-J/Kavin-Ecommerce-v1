import Image from "next/image";
import React from "react";
import { ProductCard } from "react-ui-cards";
import BestSellerProduct from "../../HeroBanner/BestSellers.tsx/BestSellerProducts";
export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export default async function BestSeller() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = (await res.json()) as Product[];

  return (
    <div className="h-full w-full px-9">
      <div className="mxl:container mx-auto flex  h-full w-full flex-col items-center py-20">
        <div className="mb-6 space-y-3 px-5 text-center text-black">
          <h3 className="text-3xl font-bold">New Arrivals</h3>
          <p className="text-sm"></p>
        </div>

        <BestSellerProduct products={data} />

        <button className="mt-6 rounded-md border-1 border-primary-color bg-transparent px-10 py-4 text-center text-base font-bold text-primary-color hover:bg-primary-color hover:text-white">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
}
