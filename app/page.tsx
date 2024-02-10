import Image from "next/image";

function Page() {
  return (
    <main>
      <div className="mx-auto h-auto w-full px-3 mxl:container lg:px-9 md:px-6">
        <div className="md:flex h-[904px] md:h-[619px] w-full overflow-hidden rounded-2xl bg-sky-200 bg-gradient-to-r from-gradient-s to-gradient-e md:flex-row">
          <div className="flex h-1/2 md:h-full w-1/2 flex-auto justify-center items-end">
            <div className="flex flex-col space-y-8 text-center px-16 items-center">
              <h5 className="font-bold text-hover-text-color drop-shadow-xl">
                summer 2020
              </h5>
              <h1 className="font-bold text-4xl text-text-color ">NEW COLLECTION</h1>
              <h4 className="text-secondary-text-color text-xl">
                We know how large objects will act, but things on a small scale
              </h4>
              <a  className="w-56 text-2xl text-white font-bold py-4 rounded-md shadow-md text-center bg-primary-color " href="#">SHOP NOW</a>
            </div>
          </div>
          <div className="md:h-full w-1/2 flex justify-end xs:justify-center items-end h-1/2 flex-auto">
          <Image
            className="object-cover object-option-1 min-w-[453px]"
              src="/hero-cover-1.svg"
              alt="KVshop Banner hero"
              width={410}
              height={433}
            />
           
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
