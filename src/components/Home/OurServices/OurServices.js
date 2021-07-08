import React from "react";
import tooth1 from "../../../images/tooth-1.png";
import tooth2 from "../../../images/tooth-2.png";
import tooth3 from "../../../images/tooth-3.png";
import Service from "./../Service/Service";
import "./OurServices.css";

const servicesData = [
  {
    serviceName: "Fuloride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit magnam.",
    icon: tooth1,
  },
  {
    serviceName: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit magnam.",
    icon: tooth2,
  },
  {
    serviceName: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit magnam.",
    icon: tooth3,
  },
];

const OurServices = () => {
  return (
    <section className="mt-5 pt-5 service-container">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provides</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-70 row">
          {servicesData.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
