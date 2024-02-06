import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
function NavBar() {
  return (
    <nav className="flex h-auto w-full flex-col px-8 py-6  mt-3 mb-2">
      <div className="flex flex-row items-center h-14 w-full flex-wrap justify-between ">
        <h1 className=" text-text-color text-2xl font-bold">KVshop</h1>
        <ul className="hidden md:flex  me-auto ms-28">
          <li className="">Home</li>
          <li className="">Porduct</li>
          <li className="">Pricing</li>
          <li className="">Contact</li>
        </ul>
        <ul className="flex flex-row items-center">
          <li className=" ms-4 p-1">
            <MagnifyingGlassIcon width={24} height={24} />
          </li>
          <li className=" ms-4 p-1">
            <ShoppingCartIcon width={24} height={24} />
          </li>
          <li className=" ms-4 p-1 md:hidden">
            <Bars3BottomRightIcon width={24} height={24} />
          </li>
        </ul>
      </div>
      <div className="md:hidden flex h-auto w-full flex-col items-center justify-center ">
        <ul className="text-secondary-text-color flex h-[450px] flex-col items-center justify-center text-center text-3xl">
          <li className=" pb-7">Home</li>
          <li className=" pb-7">Porduct</li>
          <li className=" pb-7">Pricing</li>
          <li className=" pb-7">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
