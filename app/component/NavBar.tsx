"use client";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
function NavBar() {
  const [isMenuOpen , setIsMenuOpen] = React.useState<boolean>(true)
  return (
    <nav className="relative mb-2 mt-3 flex h-auto w-full  flex-col px-8 py-4 shadow-lg shadow-gray-100/50">
      <div className="flex h-14  w-full flex-row flex-wrap items-center justify-between mxl:container mxl:mx-auto ">
        <Link href='/' ><h1 className=" text-2xl font-bold text-text-color">KVshop</h1></Link>
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

          <li className="ms-4 p-1 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bars3BottomRightIcon width={32} height={32} />
          </li>
        </ul>
      </div>
      <div className={`${isMenuOpen?`h-[450px]`:'h-0'} absolute left-0 right-0 top-24 flex w-full items-center justify-center rounded-md bg-gray-50 opacity-80 shadow-md transition-[height] delay-0 duration-100 md:hidden`}>

        <ul className={`${isMenuOpen?'flex opacity-100':'hidden opacity-0'} h-full w-full flex-col items-center justify-center space-y-5 text-center text-2xl text-secondary-text-color transition-[display] delay-150 duration-500`}>
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
