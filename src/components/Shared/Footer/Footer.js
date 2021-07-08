import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="ny-5 footer-container">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3 mt-4 pt-2">
            <br />
            <h6>Emargency Dental Care</h6>
            <h6>Check Up</h6>
            <h6>Treatment of Personal Diseases</h6>
            <h6>Tooth Extraction</h6>
          </div>
          <div className="col-md-3">
            <h4 className="text-info">Services</h4>
            <br />
            <h6>Emargency Dental Care</h6>
            <h6>Check Up</h6>
            <h6>Treatment of Personal Diseases</h6>
            <h6>Tooth Extraction</h6>
          </div>
          <div className="col-md-3">
            <h4 className='text-info'>Oral Health</h4>
            <br />
            <h6>Emargency Dental Care</h6>
            <h6>Check Up</h6>
            <h6>Treatment of Personal Diseases</h6>
            <h6>Tooth Extraction</h6>
          </div>
          <div className="col-md-3">
            <h4 className='text-info'>Our Address</h4>
            <br />
            <h6>New York-1010 Hudson Yards</h6>
            <br />
            <div className="mt-4">
              <FontAwesomeIcon className="brand-icon" icon={faFacebook} />
              <FontAwesomeIcon
                className="brand-icon mx-4"
                style={{ fontSize: "40px" }}
                icon={faGoogle}
              />
              <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
            </div>
            <div className='mt-5'>
              <h5>Call Now</h5>
              <p> <FontAwesomeIcon className="me-2"  icon={faPhoneSquare} />01537457618</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center pt-4'>Copyright &copy; 2021 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
