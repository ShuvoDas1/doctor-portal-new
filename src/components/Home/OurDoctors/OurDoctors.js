import React from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from './../Doctor/Doctor';
const doctorsData = [
    {
        img: doctor,
        phone: "+8801537457618",
        name: 'Dr.Caudi'
    },
    {
        img: doctor,
        phone: "+8801537457611",
        name: 'Dr.Setty'
    },
    {
        img: doctor,
        phone: "+8801537457612",
        name: 'Dr.David'
    }
]

const OurDoctors = () => {
    return (
        <section>
           <h4 className='text-center text-success'>OUR DOCTORS</h4>
           <div className='d-flex justify-content-center mt-5'>
               <div className="row">
                   {
                       doctorsData.map(doctor =><Doctor doctor={doctor}></Doctor>)
                   }
               </div>
            </div> 
        </section>
    );
};

export default OurDoctors;