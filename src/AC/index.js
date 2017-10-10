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

export function filterArticles(articles) {
    return {
        type: CHANGE_SELECTED_ARTICLES,
        payload: articles
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_INTERVAL,
        payload: dateRange
    }
}