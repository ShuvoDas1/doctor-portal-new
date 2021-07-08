import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {connect} from 'react-redux'
import {selectDate} from '../../../Redux/AppointmentDate/AppointmentDateActions'
import { useState } from "react";

const AppointmentHeader = ({selectDate}) => {
  const [selectedDate, setSelectedDate] = new useState(new Date())

    const handleDateChange = (date) =>{
        setSelectedDate(date);
    }
    selectDate(selectedDate)
    
  return (
    <main style={{ height: "640px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};



export default connect(null,{selectDate})(AppointmentHeader)
