"use client";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
function NavBar() {
  return (
    <nav className="relative mb-2 mt-3 flex h-auto w-full  flex-col px-8 py-4">
      <div className="flex h-14  w-full flex-row flex-wrap items-center justify-between mxl:container mxl:mx-auto ">
        <h1 className=" text-2xl font-bold text-text-color">KVshop</h1>
        <ul className="me-auto ms-28 hidden lg:flex">
          <li className="me-4 h-auto w-auto font-bold transition-all delay-75 duration-150 hover:scale-110 text-primary-color scale-105">
            <Link className="p-2 " href="/">
              Home
            </Link>
          </li>
          <li className="me-4 font-bold text-secondary-text-color">Porduct</li>
          <li className="me-4 font-bold text-secondary-text-color">Pricing</li>
          <li className="me-4 font-bold text-secondary-text-color">Contact</li>
        </ul>
        <ul className="flex flex-row items-center text-primary-color">
          <li className=" ms-4 p-1">
            <MagnifyingGlassIcon width={24} height={24} />
          </li>
          <li className=" ms-4 p-1">
            <ShoppingCartIcon width={24} height={24} />
          </li>
          <li className=" ms-4 p-1">
            <h2 className="hidden font-semibold md:block">Login / Register</h2>
          </li>

          <li className="ms-4 p-1 md:hidden">
            <Bars3BottomRightIcon width={32} height={32} />
          </li>
        </ul>
      </div>
      <div className="absolute left-0 right-0 top-24 flex h-[450px] w-full items-center justify-center rounded-md bg-gray-50 opacity-80 shadow-sm transition-all delay-0 duration-500 ease-in-out md:hidden">
        <ul className=" flex h-full w-full flex-col items-center justify-center space-y-7 text-center text-3xl text-secondary-text-color  opacity-100 transition-all delay-300 duration-500 ease-in-out">
          <li className="w-auto p-1">
            <Link
              className="inline-block w-screen scale-110 rounded-md bg-orange-50 p-3 text-black"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="w-auto p-1">
            <Link
              className="inline-block w-screen rounded-md p-3 text-black"
              href="/product"
            >
              Product
            </Link>
          </li>
          <li className="">Porduct</li>
          <li className="">Pricing</li>
          <li className="">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
