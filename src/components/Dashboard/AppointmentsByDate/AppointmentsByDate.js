import React from 'react';
import {connect} from 'react-redux'

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h1>Appointments:{appointments.length}</h1> 
            {
                appointments.map(appointment => (
                    <>
                        <p>{appointment.date}</p>
                        <li key={appointment.id}>{appointment.name}</li>
                        
                    </>
                
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        appointments: state.appointmentsByDate.appointments
    }
}

export default connect(mapStateToProps,null)(AppointmentsByDate);