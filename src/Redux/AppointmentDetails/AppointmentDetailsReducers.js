import {ADD_APPOINTMENT_REQUEST, ADD_APPOINTMENT_SUCCESS, ADD_APPOINTMENT_FAILURE} from './AppointmentDetailsTypes'

const initialAppointment ={
    loading: false,
    appointment : [],
    error: ''
}

export const appointmentReducer = (state = initialAppointment, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case ADD_APPOINTMENT_SUCCESS:
             const appointment = state.appointment.concat(action.payload)
            return{
                loading: false,
                appointment: appointment,
                error: ''
            }
        case ADD_APPOINTMENT_FAILURE:
            return {
                loading: false,
                appointment: [],
                error: action.payload
            }
    
        default:
            return state
    }
}

export default appointmentReducer;