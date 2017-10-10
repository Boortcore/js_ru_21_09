import {CHANGE_DATE_INTERVAL} from '../constants'

export default function dateFilterReduser(state = {from: null, to: null} , action) {
    switch(action.type) {
        case CHANGE_DATE_INTERVAL:
            return {...action.payload}
    }
    return state
}