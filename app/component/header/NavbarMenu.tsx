import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { Navigation } from "./NavigationBar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  menulists: Navigation[];
} & React.HtmlHTMLAttributes<HTMLUListElement>;

const NavbarMenu = (props: PropsWithChildren<Props>) => {
  const pathName = usePathname();
  const isMatch = (href: string) => href === pathName;

  return (
    <ul
      {...props}
      className={`h-full me-auto hidden lg:flex ${props.className ?? ""}`}
    >
      {props.menulists.map((list, index) => {
        return (
          <li
            key={list.href}
            className={clsx(
              "flex h-auto max-w-52 flex-auto -skew-x-12 items-center justify-center rounded-md text-center font-bold transition-all delay-75 duration-150",
              list.href === pathName &&
                "bg-primary-400/80 hover:bg-primary-400 text-white hover:scale-105 hover:text-white",
              !(list.href === pathName) &&
                "scale-100 hover:bg-primary-50/80 text-primary-200 hover:scale-95 hover:text-primary-400",
            )}
          >
            <Link className="w-full h-full flex justify-center items-center" href={list.href}><h1>{list.name}</h1></Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
