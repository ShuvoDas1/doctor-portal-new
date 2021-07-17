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
        // fetch('http://localhost:4000/addAppointment',{
        //     method: 'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body: JSON.stringify(newAppointmentObj)
        // })
        // axios.post('https://jsonplaceholder.typicode.com/posts',{newAppointmentObj})
        axios.post('http://localhost:4000/addAppointment',newAppointmentObj)
        .then(res=>{
             console.log(res.data)
             dispatch(addAppointmentSuccess(res.data))
        })
        .catch(error=>{
            dispatch(addAppointmentFailure(error))
        })
     }
 }
 