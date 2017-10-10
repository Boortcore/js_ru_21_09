import {CHANGE_DATE_INTERVAL, CHANGE_SELECTED_ARTICLES} from '../constants'

let initialState = {
    dates: {from: null, to: null},
    selected: []
}

export default function filterReduser(state = initialState , action) {
    switch(action.type) {
        case CHANGE_DATE_INTERVAL:
            return Object.assign({}, state, { dates: action.payload })
        case CHANGE_SELECTED_ARTICLES:
            return Object.assign({}, state, { selected: [...action.payload] })
    }
    return state
}
