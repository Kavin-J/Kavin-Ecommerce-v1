import Link from "next/link";
import React from "react";
import { Navigation } from "./Header";

type Props = {
  navigate: Navigation[];
  open: boolean;
  onOpen: (open: boolean) => void;
};

export default function Collapes({ open, navigate, onOpen }: Props) {
  return (
    <div
      className={`${open ? `h-96` : "h-0"}  z-50 flex w-full  items-center justify-center rounded-md bg-gray-50 opacity-80 shadow-md transition-[height] delay-0 duration-100 lg:hidden`}
    >
      <ul
        className={`${open ? "flex opacity-100" : "hidden opacity-0"} h-full w-full flex-col items-center justify-center space-y-5 text-center text-2xl text-secondary-text-color transition-[display] delay-150 duration-500`}
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
  );
}
