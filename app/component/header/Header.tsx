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
import { useScrollDirection } from "@/app/hooks/useScrollDirection";
import Collapes from "./Collapes";

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
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(true);

  const scrollDirection = useScrollDirection();
  const isDown = scrollDirection === "down";

  return (
    <nav
      className={`fixed top-0 z-50 flex h-auto w-full min-w-96 flex-col  bg-white/90 px-8 py-4 shadow-md backdrop-blur-md ${isDown ? "-translate-y-24" : ""} delay-200 duration-500`}
    >
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
            className="ms-4 p-1 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3BottomRightIcon width={32} height={32} />
          </li>
        </ul>
      </div>
      <Collapes
        navigate={navigation}
        open={isMenuOpen}
        onOpen={setIsMenuOpen}
      />
    </nav>
  );
}

