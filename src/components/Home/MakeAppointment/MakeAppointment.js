import React from "react";
import chair2 from "../../../images/chair2.png";
import doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";
const MakeAppointment = () => {
  return (
    <section className="make-appointment-container d-flex justify-content-center">
      <div className="w-75 make-appointment-info">
        <div className="make-appointment-inner row">
          <div className="col-md-6">
            <img src={doctor} style={{height: '600px'}} className="img-fluid doctor-img" alt="" />
          </div>
          <div className="col-md-6 pt-5">
            <h4 className="text-info">APPOINTMENT</h4>
            <h2 className="text-white pt-3">
              Make an appointment <br /> Today
            </h2>
            <p className="text-white pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fugit inventore itaque blanditiis quidem perferendis.
            </p>
            <br />
            <button className="btn" style={{background: '#10CFE3', color: '#fff', padding: '10px 25px', borderRadius:'0'}}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
