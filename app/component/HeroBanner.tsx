import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

function HeroBanner() {
  return (
    <div>
      <div className="mx-auto h-auto w-full px-3 mxl:container md:px-12 lg:pe-20 lg:ps-14">
        <div className="h-dvh w-full overflow-visible rounded-2xl bg-sky-200 bg-gradient-to-r from-gradient-s to-gradient-e md:flex md:h-[619px] md:flex-row lg:me-7">
          <div className="flex h-1/2 flex-auto items-end justify-center md:h-full md:w-1/2 md:items-center">
            <div className="flex flex-col items-center space-y-8 px-16 text-center md:items-start md:text-start">
              <h5 className="font-bold text-hover-text-color drop-shadow-lg lg:text-lg">
                summer 2020
              </h5>
              <h1 className="text-4xl font-bold text-text-color lg:text-6xl ">
                NEW COLLECTION
              </h1>
              <h4 className="text-xl text-secondary-text-color">
                We know how large objects will act, but things on a small scale
              </h4>
              <Link
                className="w-56 rounded-md bg-primary-color py-4 text-center text-2xl font-bold text-white shadow-md hover:bg-orange-400/80 "
                href="#"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
          <div className="lg flex h-1/2 items-end justify-end  xs:justify-center md:h-full md:w-1/2  md:items-end md:overflow-x-visible">
            <Image
              className="min-w-[453px] object-cover object-option-1 md:hidden"
              src="/hero-cover-1.svg"
              alt="KVshop Banner hero"
              width={410}
              height={433}
              priority={true}
            />
            <div className="hidden min-w-[450px] max-w-screen-md overflow-y-clip md:block">
              <Image
                className="w-full  overflow-visible object-cover  object-option-2 lg:object-option-3"
                src="/hero-cover-1.svg"
                alt="KVshop Banner hero"
                width={450}
                height={462}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
