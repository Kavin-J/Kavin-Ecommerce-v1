import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero1 = (props: Props) => {
  return (
    <div className="relative flex h-full w-full flex-row-reverse flex-wrap-reverse items-center rounded-2xl bg-primary-300 pt-4 md:max-h-[960px] md:min-h-[660px] md:flex-row ">
      <div className="absolute -left-40 top-0 flex h-full w-full overflow-visible md:-left-0">
        <Image
          width={1820}
          height={999}
          src="/shop-hero-1-product-slide-1.jpg"
          alt="banner"
          className="overflow-visible object-cover"
        />
      </div>
      <div
        className={`z-10 flex flex-auto items-end 
                       justify-start md:h-full md:w-1/2 md:items-center `}
      >
        <div className="flex flex-col items-center space-y-8 px-16 text-center md:items-start md:text-start">
          <h5 className="font-bold text-white drop-shadow-lg lg:text-lg">
            ฉลอง เปิดร้านใหม่
          </h5>
          <h1 className="block text-4xl font-bold text-red-100  leading-inherit lg:text-6xl ">
            ลดแรงทั้งร้าน
            <p className="animate-bounce font-mono text-red-400">ลดสูงสด 50%</p>
          </h1>
          <h4 className="text-xl text-secondary-text-color"></h4>
          <Link
            className="w-56 rounded-md bg-secondary-400 py-4 text-center text-2xl font-bold text-white shadow-md hover:bg-orange-400/80 "
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
{
  /**
   <div className="flex h-1/2 items-start justify-center md:h-full md:w-1/2  md:items-end md:self-start   md:overflow-x-visible">
        <Image
          className="object-co min-w-[453px] md:hidden"
          src="/Lovepik_com-400271067-fashionable-womens-bag-white-base-map.png"
          alt="KVshop Banner hero"
          width={410}
          height={433}
          priority={true}
        />
        <div className="hidden min-w-[450px] max-w-screen-md translate-y-4 overflow-y-clip md:block">
          <Image
            className="w-full  overflow-visible object-cover"
            src="/Lovepik_com-400271067-fashionable-womens-bag-white-base-map.png"
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
          <h5 className="font-bold text-hover-text-color drop-shadow-lg lg:text-lg">
            ฉลอง เปิดร้านใหม่
          </h5>
          <h1 className="text-4xl font-bold text-purple-800 lg:text-6xl ">
            ลดแรงทั้งร้าน
          </h1>
          <h4 className="text-xl text-secondary-text-color">
            กับเทคโนโลยีการทอที่ทำให้ ผ้านุ่ม ระบายอากาศดี
          </h4>
          <Link
            className="w-56 rounded-md bg-secondary-400 py-4 text-center text-2xl font-bold text-white shadow-md hover:bg-orange-400/80 "
            href="#"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
  */
}
