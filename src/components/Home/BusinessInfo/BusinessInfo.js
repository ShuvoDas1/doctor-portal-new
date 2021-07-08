import React from "react";
import InfoCard from "./../InfoCard/InfoCard";
import {
  faPhone,
  faMapMarker,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7/24",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    description: "Aman Bazar, Chittagong",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact us now",
    description: "+8801500880088",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className='row w-75'>
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessInfo;
