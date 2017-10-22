import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {Record, OrderedMap} from 'immutable'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
})

export default (state = new ReducerRecord, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            console.log("STATECOMMENTS", state)
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId }))

        case LOAD_COMMENTS + SUCCESS:
            return state.set('entities', arrToMap(response, CommentRecord))
    }

    return state
}