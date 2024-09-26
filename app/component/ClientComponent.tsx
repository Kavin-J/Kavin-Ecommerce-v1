import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

function ClientComponent() {
  return (
    <div className="mx-auto flex h-auto w-full items-center justify-center lg:container md:px-24 xl:px-48">
        <ul className="flex w-full flex-row flex-wrap items-center justify-center  py-12 text-secondary-text-color md:py-6 ">
          <li className="flex h-auto w-full justify-center md:w-4/12 lg:w-2/12">
            <FontAwesomeIcon icon={faHooli} className="w-[65px] md:w-28" />
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
      </div>
  )
}

export default ClientComponent