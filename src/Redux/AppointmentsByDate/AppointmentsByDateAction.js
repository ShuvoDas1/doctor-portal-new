import {APPOINTMENT_BY_DATE_SUCCESS,APPOINTMENT_BY_DATE_REQUEST,APPOINTMENT_BY_DATE_FAILURE} from './AppointsByDateTypes.js'
import axios from 'axios';
export const appointmentByDateSuccess = (appointments) => {
    return{
        type: APPOINTMENT_BY_DATE_SUCCESS,
        payload: appointments
    }
}
export const appointmentByDateRequest = (loading) => {
    return{
        type: APPOINTMENT_BY_DATE_REQUEST,
        payload: loading
    }
}
export const appointmentByDateFailure = (error) => {
    return{
        type: APPOINTMENT_BY_DATE_FAILURE,
        payload: error
    }
}

export const getAppointmentsByDate= (date) => {
    // console.log(date)
    return(dispatch)=>{
        dispatch(appointmentByDateRequest())
        axios.post('http://localhost:4000/appointmentsByDate',{date})
        .then(res => {
            // console.log(res.data);
            dispatch(appointmentByDateSuccess(res.data))

        })
        .catch(error =>{
            dispatch(appointmentByDateFailure(error.message))
        })
    }
}