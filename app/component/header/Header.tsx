"use client";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "../../ui/Iconsvg/Logo";
import NavbarMenu from "./NavbarMenu";
import { usePathname } from "next/navigation";
export interface Navigation {
  href: string;
  name: string;
}
const navigation: Navigation[] = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/products" },
  { name: "Marketplace", href: "#market" },
  { name: "Company", href: "#" },
];
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const pathName = usePathname();

  return (
    <nav className="fixed top-0 flex h-auto w-full min-w-96  flex-col bg-white/90  px-8 py-4 z-50 backdrop-blur-md shadow-md ">
      <div className="flex h-14  w-full flex-row flex-nowrap items-center justify-between xl:container xl:mx-auto ">
        <Link href="/">
          <Logo className="w-40 text-primary-400/80 hover:scale-110 hover:text-primary-400 sm:w-48" />
        </Link>
        <NavbarMenu className="ms-7 flex-grow" menulists={navigation} />
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

          <li
            className="ms-4 p-1 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3BottomRightIcon width={32} height={32} />
          </li>
        </ul>
      </div>
      <div
        className={`${isMenuOpen ? `h-[450px]` : "h-0"} absolute left-0 right-0 top-24 flex w-full items-center justify-center rounded-md bg-gray-50 opacity-80 shadow-md transition-[height] delay-0 duration-100 md:hidden`}
      >
        <ul
          className={`${isMenuOpen ? "flex opacity-100" : "hidden opacity-0"} h-full w-full flex-col items-center justify-center space-y-5 text-center text-2xl text-secondary-text-color transition-[display] delay-150 duration-500`}
        >
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

export default Header;
