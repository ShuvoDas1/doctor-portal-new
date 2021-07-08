import {SELECT_DATE} from './AppintmentDateTypes'

export const selectDate = (date) =>{
    return{
        type: SELECT_DATE,
        payload: date
    }
}