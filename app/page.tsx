// import {faHouse} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

function Page() {
  return (
    <>
      <main>
        <div className="mx-auto h-auto w-full px-3 mxl:container md:px-12 lg:pe-20 lg:ps-14">
          <div className="h-[904px] w-full overflow-visible rounded-2xl bg-sky-200 bg-gradient-to-r from-gradient-s to-gradient-e md:flex md:h-[619px] md:flex-row lg:me-7">
            <div className="flex h-1/2 flex-auto items-end justify-center md:h-full md:w-1/2 md:items-center">
              <div className="flex flex-col items-center space-y-8 px-16 text-center md:items-start md:text-start">
                <h5 className="font-bold text-hover-text-color drop-shadow-xl lg:text-lg">
                  summer 2020
                </h5>
                <h1 className="text-4xl font-bold text-text-color lg:text-6xl ">
                  NEW COLLECTION
                </h1>
                <h4 className="text-xl text-secondary-text-color">
                  We know how large objects will act, but things on a small
                  scale
                </h4>
                <a
                  className="w-56 rounded-md bg-primary-color py-4 text-center text-2xl font-bold text-white shadow-md "
                  href="#"
                >
                  SHOP NOW
                </a>
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
      </main>

      {/* Client Section */}

      <div className="flex h-auto w-full items-center justify-center md:px-24 xl:px-48">
        <ul className="flex w-full flex-row flex-wrap items-center justify-center  py-12 md:py-6 text-secondary-text-color ">
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faHooli} className="w-[153px] md:w-28" />
          </li>
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faLyft} className="w-[153px] md:w-28" />
          </li>
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faPiedPiperHat} className="w-[153px] md:w-28" />
          </li>
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faStripe} className="w-[153px] md:w-28" />
          </li>
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faAws} className="w-[153px] md:w-28" />
          </li>
          <li className="flex justify-center h-auto w-full md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faRedditAlien} className="w-[153px] md:w-28" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Page;
