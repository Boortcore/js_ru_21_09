import { CHANGE_DATE_RANGE } from '../constants'


export default function dateFilterReduser(state = {from: null, to: null} , action) {
    switch(action.type) {
        case CHANGE_DATE_RANGE:
            return {...action.payload}
    }
    return state
}