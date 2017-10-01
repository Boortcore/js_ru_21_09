import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/Accordion'

function ArticleList(props) {

    const {articles, openItemId, toggleItem} = props
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openItemId}
                 onButtonClick={toggleItem(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Accordion(ArticleList)