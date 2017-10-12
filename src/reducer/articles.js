import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})
console.log(articlesMap)
export default (articleState = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            let articleStateCopy = {...articleState}
            delete articleStateCopy[payload.id]
            return articleStateCopy
        case ADD_COMMENT:
            const { articleId, id } = payload.comment
            let newArticleObject = {...articleState[articleId]}
            newArticleObject.comments.push(id)
            return Object.assign({}, articleState, {[articleId]: newArticleObject})
    }
    return articleState
}