import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero1 = (props: Props) => {
  return (
    <div className="flex w-full flex-row-reverse flex-wrap-reverse items-center rounded-2xl bg-gradient-to-r from-sky-100 to-sky-300 pt-4 md:max-h-[960px] md:min-h-[660px] md:flex-row ">
      <div className="flex h-1/2 items-start justify-center md:h-full md:w-1/2  md:items-end md:self-start   md:overflow-x-visible">
        <Image
          className="object-co min-w-[453px] md:hidden"
          src="/hero-cover-1.svg"
          alt="KVshop Banner hero"
          width={410}
          height={433}
          priority={true}
        />
        <div className="hidden min-w-[450px] max-w-screen-md translate-y-4 overflow-y-clip md:block">
          <Image
            className="w-full  overflow-visible object-cover"
            src="/hero-cover-1.svg"
            alt="KVshop Banner hero"
            width={450}
            height={462}
            priority={true}
          />
        </div>
      </div>
      <div
        className={`flex h-1/2 flex-auto items-end justify-center 
                       md:h-full md:w-1/2 md:items-center`}
      >
        <div className="flex flex-col items-center space-y-8 px-16 text-center md:items-start md:text-start">
          <h5 className="font-bold text-hover-text-color drop-shadow-lg hover:animate-ping lg:text-lg ">
            summer 2024
          </h5>
          <h1 className="animate-bounce text-4xl font-bold text-text-color lg:text-6xl ">
            คอลเล็กชั่นใหม่
          </h1>
          <h4 className="text-xl text-secondary-text-color">
            กับเทคโนโลยีการทอที่ทำให้ ผ้านุ่ม ระบายอากาศดี
          </h4>
          <Link
            className="w-56 rounded-md bg-primary-color py-4 text-center text-2xl font-bold text-white shadow-md hover:bg-orange-400/80 "
            href="#"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
