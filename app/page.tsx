import Image from "next/image";
import HeroBanner from "./component/HeroBanner/HeroBanner";
import ClientComponent from "./component/ClientComponents/ClientComponent";
import ShopCard from "./component/ShopCard";
import BestSeller from "./component/BestsellerProduct/BestSeller";
import FeatureProduct from "./component/FeatureProduct";
import { Card } from "@nextui-org/react";
import BlogPosts from "./component/BlogPosts";

function Page() {
  return (
    <div>
      <HeroBanner />

      {/* Client Section */}

      <ClientComponent />

      {/*  shop card section */}

      {/* <ShopCard /> */}

      {/* Best Seller Product */}

      <BestSeller />

      {/* <FeatureProduct /> */}

      {/* <BlogPosts /> */}
    </div>
  );
}

export default Page;
