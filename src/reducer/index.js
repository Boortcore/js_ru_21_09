import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
<<<<<<< HEAD
import selectFilterReduser from './selectFilterReduser'
import dateFilterReduser from './dateFilterReducer'
export default combineReducers({
    counter: counterReducer,
    articles,
    selected: selectFilterReduser,
    dates: dateFilterReduser
=======

import filterReducer from './filterReducer'
export default combineReducers({
    counter: counterReducer,
    articles,
    filter: filterReducer
>>>>>>> 43cd561fc18982d715d23ac2f90566940d080347
})