import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const commentsMap = normalizedComments.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})


export default (commentsState = commentsMap, action) => {

    const { type, payload, response, error } = action

    switch (type) {

        case ADD_COMMENT:

            const { id, text, author} = payload.comment

            let newCommentsState = {...commentsState}
            newCommentsState[id] = {
                id: id,
                user: author,
                text: text
            }
            
            return newCommentsState
    }

    return commentsState
}