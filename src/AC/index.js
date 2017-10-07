import {INCREMENT, DELETE_ARTICLE, CHANGE_SELECTED_ARTICLES, CHANGE_DATE_INTERVAL} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticles(id) {
    return {
        type: CHANGE_SELECTED_ARTICLES,
        payload: Object.assign(id)
    }
}

export function changeDateInterval(dateInterval) {
    return {
        type: CHANGE_DATE_INTERVAL,
        payload: Object.assign(dateInterval)
    }
}