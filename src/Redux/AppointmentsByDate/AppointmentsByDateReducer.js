import {APPOINTMENT_BY_DATE_SUCCESS,APPOINTMENT_BY_DATE_REQUEST,APPOINTMENT_BY_DATE_FAILURE} from './AppointsByDateTypes'

const initialAppointmentByDate = {
    loading: false,
    appointments: [],
    error : ''
}

export const appointmentsByDateReducer = (state= initialAppointmentByDate, action) => {
    switch (action.type) {
        case APPOINTMENT_BY_DATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case APPOINTMENT_BY_DATE_SUCCESS:
            return{
                loading: false,
                appointments: action.payload,
                error: ''
            }
        case APPOINTMENT_BY_DATE_FAILURE:
           return{
               loading: false,
               appointments: [],
               error: action.payload
           }
            
    
        default: return state
    }
}

export default appointmentsByDateReducer