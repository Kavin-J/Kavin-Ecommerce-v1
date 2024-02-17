
import Image from "next/image";
import HeroBanner from "./component/HeroBanner";
import ClientComponent from "./component/ClientComponent";
import ShopCard from "./component/ShopCard";

function Page() {
  return (
    <>
      <HeroBanner />

      {/* Client Section */}
      <ClientComponent />
      
      {/*  shop card section */}
      <ShopCard />
      
    </>
  );
}

export default Page;
