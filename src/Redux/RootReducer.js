import {combineReducers} from 'redux';
import appointmentDateReducers from "./AppointmentDate/AppointmentDateReducers"
import appointmentDetailsReducers from "./AppointmentDetails/AppointmentDetailsReducers"
import appointmentsByDateReducer from './AppointmentsByDate/AppointmentsByDateReducer';

const rootReducer = combineReducers({
    appointmentDate: appointmentDateReducers,
    appointmentDetails: appointmentDetailsReducers,
    appointmentsByDate: appointmentsByDateReducer
})

export default rootReducer