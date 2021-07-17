import {combineReducers} from 'redux';
import appointmentDateReducers from "./AppointmentDate/AppointmentDateReducers"
import appointmentDetailsReducers from "./AppointmentDetails/AppointmentDetailsReducers"

const rootReducer = combineReducers({
    appointmentDate: appointmentDateReducers,
    appointmentDetails: appointmentDetailsReducers
})

export default rootReducer