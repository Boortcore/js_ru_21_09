import { CHANGE_SELECTED_ARTICLES } from '../constants'

export default function selectFilterReduser(state = [] , action) {
    switch(action.type) {
        case CHANGE_SELECTED_ARTICLES:
            return [...action.payload]
    }
    return state
}