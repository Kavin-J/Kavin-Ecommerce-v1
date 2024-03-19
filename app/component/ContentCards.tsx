import { ChartBarSquareIcon, ClockIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";


import Image from "next/image";
import Link from "next/link";
import React, { ClassAttributes } from "react";
interface CardStyle {
  rounded?: "sm" | "md" | "lg" | "none" | undefined;
  padding?: boolean | undefined;
  isSmall?: boolean;
  shadow?: "sm" | "md" | "lg" | "none" | undefined;
  backgroundColor?: string;
}
interface CardContent {
  src: string;
  tags?: string[];
  headers: string;
  discriptions: string;
  date: string;
  comment?: string[];
  url: string;
}

type CardProps = CardContent & CardStyle;

function ContentCards({
  src,
  padding = false,
  rounded = "none",
  shadow = "md",
  isSmall = false,
  backgroundColor,
  tags = [],
  headers,
  discriptions,
  date,
  comment,
  url,
}: CardProps) {
  return (
    <div
      className={clsx(
        `min-w-72`,
        `${isSmall ? "max-w-[230px]" : "max-w-[450px]"}`,
        `shadow-${shadow}`,
        `rounded-${rounded}`,
        `overflow-hidden bg-gray-100`,
      )}
      style={{ backgroundColor }}
    >
      <div className="flex h-full w-full flex-col">
        {/* picture */}
        <div className={clsx("max-h-full", padding && "p-6")}>
          <div className={`relative h-full rounded-t-${rounded} overflow-hidden`}>
            <Image
              className={clsx(
                "object-cover w-full h-auto",
                "hover:opacity-90",
              )}
              alt="card image"
              src={src}
              height={300}
              width={330}
            />
            <span className="absolute left-7 top-5 rounded bg-red-500 px-3 py-1 text-sm font-bold text-white">
              New
            </span>
          </div>
        </div>
        {/* end Picture */}
        {/* Frame content */}
        <div className="shrink-0 h-[306px] space-y-3 p-6 pb-9 ">
          <div className="space-x-4 text-xs text-disable-element">
            {tags.map((tag, index) => (
              <small key={`${index}`}>{tag.toUpperCase()}</small>
            ))}
            ;
          </div>
          <h4 className="overflow-hidden text-xl font-bold text-text-color">
            {headers}
          </h4>
          <p className="overflow-hidden text-sm text-text-color">
            {discriptions}
          </p>
          <div className="flex justify-between py-4">
            <div className="flex flex-row space-x-1">
              <ClockIcon
                width={16}
                height={16}
                className="text-primary-color"
              />

              <small>{date}</small>
            </div>
            <div className="flex flex-row space-x-1">
              <ChartBarSquareIcon
                className="text-secondary-color-1"
                width={16}
                height={16}
              />
              <small>{`${comment?.length ? comment.length : 0} comment`}</small>
            </div>
          </div>
          <Link
            className="flex flex-row space-x-2 text-primary-color hover:scale-95"
            href={url}
          >
            <h6>Learn More</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContentCards;
