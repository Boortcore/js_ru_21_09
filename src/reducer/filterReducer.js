import {CHANGE_DATE_INTERVAL, CHANGE_SELECTED_ARTICLES, DELETE_ARTICLE} from '../constants'

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
        case DELETE_ARTICLE:
            return Object.assign({}, state, { selected: state.selected.filter(item => item.value !== action.payload.id) })
    }
    return state
}
