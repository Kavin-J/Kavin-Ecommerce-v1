import { Button } from "@nextui-org/react";
import NavBar from "./component/NavBar";
import Image from 'next/image'
function Page() {
  return (
    <main>
      <div className="mxl:container mx-auto px-3 lg:px-9 bg-red-100 w-full h-screen">
        <div className="w-full p-7 h-screen bg-sky-200 rounded-2xl bg-gradient-to-r from-gradient-s to-gradient-e">
          <Image src='/hero-cover-1.svg' alt="KVshop Banner hero" width={696} height={619}/>
        </div>
        
      </div>
    </main>
  );
}

export default Page;
