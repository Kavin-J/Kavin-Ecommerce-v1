import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../Container";
import ClientSilders from "./ClientSilders";

function ClientComponent() {
  return (
    <div className="flex h-[320px] w-full flex-col justify-center bg-slate-100">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-text-color animate-pulse">
        สินค้า มากมายหลากหลายแบรนด์
      </h1>
      <div className="flex h-44 w-full overflow-hidden ">
        <Container className="h-full w-full" maxWidth="lg">
          <ClientSilders />
        </Container>
      </div>
    </div>
  );
}

export default ClientComponent;

{
  /**
   <ul className="flex w-full flex-row flex-wrap items-center justify-center  py-12 text-secondary-text-color md:py-6 ">
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={brands} className="w-[65px] md:w-28" />
          </li>
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faLyft} className="w-[153px] md:w-28" />
          </li>
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon
              icon={faPiedPiperHat}
              className="w-[153px] md:w-28"
            />
          </li>
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faStripe} className="w-[153px] md:w-28" />
          </li>
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faAws} className="w-[153px] md:w-28" />
          </li>
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon
              icon={faRedditAlien}
              className="w-[153px] md:w-28"
            />
          </li>
        </ul>
  */
}
