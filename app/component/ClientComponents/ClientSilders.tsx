import React from "react";
import SliderWrappers from "./SliderWrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";

type Props = {};
const tailwindColors = [
  "black",
  "white",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "rose",
  "amber",
  "lime",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "violet",
  "fuchsia",
  "orange",
  "stone",
  "neutral",
  "zinc",
  "slate",
];
const iconNames = [
  "hooli",
  "yelp",
  "cc-visa",
  "lastfm",
  "shopware",
  "creative-commons-nc",
  "aws",
  "redhat",
  "yoast",
  "cloudflare",
  "ups",
  "pixiv",
  "wpexplorer",
  "dyalog",
  "bity",
  "stackpath",
  "buysellads",
  "first-order",
  "modx",
  "guilded",
  "vnv",
].map((name, index) => {
  const iconKey = `fa${name.replace(/(?:^|-)(\w)/g, (_, c) => c.toUpperCase())}`;
  return iconKey;
});
const tailwindColorClasses: Record<string, string> = {
  black: "text-black",
  white: "text-white",
  gray: "text-gray-400",
  red: "text-red-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
  blue: "text-blue-400",
  indigo: "text-indigo-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
  rose: "text-rose-400",
  amber: "text-amber-400",
  lime: "text-lime-400",
  emerald: "text-emerald-400",
  teal: "text-teal-400",
  cyan: "text-cyan-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  fuchsia: "text-fuchsia-400",
  orange: "text-orange-400",
  stone: "text-stone-400",
  neutral: "text-neutral-400",
  zinc: "text-zinc-400",
  slate: "text-slate-400",
};

export function randomColor() {
  const colors = Object.values(tailwindColorClasses);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const ClientSilders = (props: Props) => {
  return (
    <SliderWrappers className="">
      {Array.from(iconNames, (brand, index) => (
        <div
          key={index}
          className={`${randomColor()} animate-pulse-scale hover:text-primary-100`}
        >
          <FontAwesomeIcon
            icon={Icons[brand as keyof typeof Icons] as Icons.IconDefinition}
            className={`w-[65px] text-inherit`}
          />
        </div>
      ))}
    </SliderWrappers>
  );
};

export default ClientSilders;
