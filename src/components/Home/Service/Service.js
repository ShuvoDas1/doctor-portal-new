import React from "react";
import './Service.css'
const Service = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
          <img className='service-icon' src={service.icon} alt="" />
          <h5>{service.serviceName}</h5>
          <p>{service.description}</p>
    </div>
  );
};

export default Service;
