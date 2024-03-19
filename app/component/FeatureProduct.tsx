import Image from "next/image";
import Container from "./Container";
import React from "react";

function FeatureProduct() {
  return (
    <div className="px-5">
      <Container maxWidth="lg">
        <div className="flex flex-col py-20">
          <div className="space-y-4 pb-12 px-11">
            <h5 className="text-primary-color text-2xl font-bold">Feature Product</h5>
            <h2 className="text-text-color text-4xl  font-bold">We love what we do</h2>
            <p className="text-secondary-text-color text-sm">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics <br />
              <br />
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="flex gap-x-3 bg-sky-300">
            <div className="w-5/12">
              <Image
                className="object-cover w-full h-full"
                width={159}
                height={363}
                src="/helen-ast-Y197IHFyr6c-unsplash.jpg"
                alt="FP01"
              />
            </div>
            <div className="w-7/12">
              <Image
                className="object-cover w-full h-full"
                width={204}
                height={363}
                src="/julia-rekamie-Z72YujnOrlY-unsplash.jpg"
                alt="FP02"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeatureProduct;
