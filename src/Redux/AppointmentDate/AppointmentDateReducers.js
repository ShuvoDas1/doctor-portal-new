import {SELECT_DATE} from './AppintmentDateTypes'

const initialDate = {
    date : new Date()
}

export const appointmentDateReducers = (state = initialDate, action)=>{
    switch (action.type) {
        case SELECT_DATE:        
            return{
                ...state,
                date: action.payload
            }
    
        default:
            return state
    }
}

export default appointmentDateReducers