import React from 'react'
import Image from 'next/image'

function ShopCard() {
  return (
    <div className="lg:h-[732px]">
        <div className="mx-auto h-auto w-full px-6 py-6 mxl:container md:px-14">
          <div className="grid grid-rows-3 justify-center gap-4 lg:h-dvh lg:grid-cols-8 lg:grid-rows-2">
            <div className="group/item relative h-full w-auto overflow-hidden hover:opacity-90 lg:col-span-5 lg:row-span-2">
              <Image
                className="min-h-full w-full cursor-pointer object-cover"
                src="/card1.jpg"
                width={811}
                height={811}
                alt="kavin card shop"
              />
              <div className="absolute bottom-0 left-0 flex  h-60 w-full cursor-pointer flex-col items-start justify-end space-y-6 bg-primary px-10 py-9 text-white lg:w-9/12">
                <h1 className=" text-2xl font-bold drop-shadow-lg ">
                  Top Porduct Of the Weeek
                </h1>
                <button className="rounded-lg border-1 border-white px-10 py-4 text-sm font-semibold group-hover/item:bg-orange-400/80">
                  EXPLORS ITEMS
                </button>
              </div>
            </div>
            <div className="group/item relative  h-full w-auto overflow-hidden lg:col-span-3 lg:row-span-1">
              <Image
                className="min-h-full w-full cursor-pointer object-cover hover:opacity-90"
                src="/card2.jpg"
                width={811}
                height={811}
                alt="kavin card shop"
              />
              <div className="absolute bottom-0 left-0 flex  h-auto w-full cursor-pointer flex-col items-start justify-end space-y-6 bg-primary px-10 py-9 text-white">
                <h1 className=" text-2xl font-bold drop-shadow-lg md:text-lg">
                  Top Porduct Of the Weeek
                </h1>
                <button className="rounded-lg border-1 border-white px-10 py-4 text-sm font-semibold group-hover/item:bg-orange-300/80 md:text-xs">
                  EXPLORS ITEMS
                </button>
              </div>
            </div>
            <div className="group/item relative h-full w-auto overflow-hidden lg:col-span-3 lg:row-span-1">
              <Image
                className="min-h-full w-full cursor-pointer object-cover hover:opacity-90"
                src="/card3.jpg"
                width={811}
                height={811}
                alt="kavin card shop"
              />
              <div className="absolute bottom-0 left-0 flex w-full cursor-pointer flex-col items-start justify-end space-y-6 bg-primary px-10 py-9 text-white">
                <h1 className=" text-2xl font-bold drop-shadow-lg md:text-lg">
                  Top Porduct Of the Weeek
                </h1>
                <button className="rounded-lg border-1 border-white px-10 py-4 text-sm font-semibold group-hover/item:bg-orange-300/80 md:text-xs">
                  EXPLORS ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShopCard