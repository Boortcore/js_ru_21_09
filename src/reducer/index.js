import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectFilterReduser from './selectFilterReduser'
import dateFilterReduser from './dateFilterReducer'
export default combineReducers({
    counter: counterReducer,
    articles,
    selected: selectFilterReduser,
    dates: dateFilterReduser
})