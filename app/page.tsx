import HeroBanner from "./component/HeroBanner/HeroBanner";
import ClientComponent from "./component/ClientComponents/ClientComponent";
import BestSeller from "./component/BestsellerProduct/BestSeller";

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
