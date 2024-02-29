import Image from "next/image";
import React from "react";

function BestSeller() {
  return (
    <div className="h-full w-full px-9">
      <div className="mx-auto h-full w-full  py-20 mxl:container flex flex-col items-center">
        <div className="mb-6 space-y-3 px-5 text-center text-black">
          <h3 className="text-3xl font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-7 gap-x-3  p-6 md:grid-cols-3 lg:grid-cols-5">
          
          <div className="flex justify-center">
            {/* card */}
            <div className="flex h-[522px] max-w-[295px] flex-col">
              <div className="h-[360px] w-full flex-none">
                <Image
                  className="h-full w-full object-cover"
                  src="/card1.jpg"
                  width={640}
                  height={962}
                  alt="card"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2 px-6 pb-9 pt-6 text-center">
                <h5 className="font-bold text-2xl text-text-color">Graphic Design</h5>
                <h6 className="text-secondary-text-color font-bold ">English Department</h6>
                <p className="text-secondary-color-1 font-bold text-base">$16.48</p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="flex justify-center">
            {/* card */}
            <div className="flex h-[522px] max-w-[295px] flex-col">
              <div className="h-[360px] w-full flex-none">
                <Image
                  className="h-full w-full object-cover"
                  src="/card1.jpg"
                  width={640}
                  height={962}
                  alt="card"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2 px-6 pb-9 pt-6 text-center">
                <h5 className="font-bold text-2xl text-text-color">Graphic Design</h5>
                <h6 className="text-secondary-text-color font-bold ">English Department</h6>
                <p className="text-secondary-color-1 font-bold text-base">$16.48</p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="flex justify-center">
            {/* card */}
            <div className="flex h-[522px] max-w-[295px] flex-col">
              <div className="h-[360px] w-full flex-none">
                <Image
                  className="h-full w-full object-cover"
                  src="/card1.jpg"
                  width={640}
                  height={962}
                  alt="card"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2 px-6 pb-9 pt-6 text-center">
                <h5 className="font-bold text-2xl text-text-color">Graphic Design</h5>
                <h6 className="text-secondary-text-color font-bold ">English Department</h6>
                <p className="text-secondary-color-1 font-bold text-base">$16.48</p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="flex justify-center">
            {/* card */}
            <div className="flex h-[522px] max-w-[295px] flex-col">
              <div className="h-[360px] w-full flex-none">
                <Image
                  className="h-full w-full object-cover"
                  src="/card1.jpg"
                  width={640}
                  height={962}
                  alt="card"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2 px-6 pb-9 pt-6 text-center">
                <h5 className="font-bold text-2xl text-text-color">Graphic Design</h5>
                <h6 className="text-secondary-text-color font-bold ">English Department</h6>
                <p className="text-secondary-color-1 font-bold text-base">$16.48</p>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="flex justify-center">
            {/* card */}
            <div className="flex h-[522px] max-w-[295px] flex-col">
              <div className="h-[360px] w-full flex-none">
                <Image
                  className="h-full w-full object-cover"
                  src="/card1.jpg"
                  width={640}
                  height={962}
                  alt="card"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-2 px-6 pb-9 pt-6 text-center">
                <h5 className="font-bold text-2xl text-text-color">Graphic Design</h5>
                <h6 className="text-secondary-text-color font-bold ">English Department</h6>
                <p className="text-secondary-color-1 font-bold text-base">$16.48</p>
              </div>
            </div>
            {/* card end */}
          </div>
          
        </div>
        {/* <Button></Button> */}
       <button className="mt-6 text-center py-4 px-10 bg-transparent text-primary-color font-bold text-base border-1 border-primary-color rounded-md hover:bg-primary-color hover:text-white">LOAD MORE PRODUCTS</button>

      </div>
    </div>
  );
}

export default BestSeller;
