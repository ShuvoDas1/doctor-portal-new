 import {ADD_APPOINTMENT_REQUEST, ADD_APPOINTMENT_SUCCESS, ADD_APPOINTMENT_FAILURE} from './AppointmentDetailsTypes'
 import axios from 'axios';

 export const addAppointmentRequest = loading =>{
     return{
         type: ADD_APPOINTMENT_REQUEST,
         payload: loading
     }
 }

 export const addAppointmentSuccess = newAppointmentObj =>{
     return {
         type: ADD_APPOINTMENT_SUCCESS,
         payload: newAppointmentObj
     }
 }

 export const addAppointmentFailure = error =>{
     return{
         type: ADD_APPOINTMENT_FAILURE,
         payload: error
     }
 }

 export const addAppointment = newAppointmentObj =>{
     return (dispatch) => {
        dispatch(addAppointmentRequest())
        axios.post('http://localhost:4000/addAppointment',newAppointmentObj)
        .then(res=>{
             dispatch(addAppointmentSuccess(res.data))
        })
        .catch(error=>{
            dispatch(addAppointmentFailure(error))
        })
     }
 }
 