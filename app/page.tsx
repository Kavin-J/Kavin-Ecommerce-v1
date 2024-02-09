import Image from "next/image";

function Page() {
  return (
    <main>
      <div className="mx-auto h-screen w-full bg-red-100 px-3 mxl:container lg:px-9">
        <div className="h-screen w-full rounded-2xl bg-sky-200 bg-gradient-to-r from-gradient-s to-gradient-e p-7">
          {/* <Image
            src="/hero-cover-1.svg"
            alt="KVshop Banner hero"
            width={696}
            height={619}
          /> */}
        </div>
      </div>
    </main>
  );
}

export default Page;
