import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';
import BookAppointment from './../BookAppointment/BookAppointment'
const Appointment = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader ></AppointmentHeader>
            <BookAppointment></BookAppointment>
            <Footer></Footer>
        </div>
    );
};


export default  Appointment;