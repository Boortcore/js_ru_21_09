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
    loading: false
})

export default (state = new ReducerRecord, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        case LOAD_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:

            let res =  state
                .set('loading', false)
                .set('entities', arrToMap(response, CommentRecord))
            return res

    }

    return state
}