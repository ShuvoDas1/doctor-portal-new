import {combineReducers} from 'redux';
import appointmentDateReducers from "./AppointmentDate/AppointmentDateReducers"

const rootReducer = combineReducers({
    appointmentDate: appointmentDateReducers
})

export default rootReducer