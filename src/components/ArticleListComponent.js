import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import AccordionComponent from '../decorators/AccordionComponent'

class ArticleListComponent extends AccordionComponent{

    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     onButtonClick={this.toggleItem(article.id)}
            />
        </li>)

        return (
            <ul style={{ border: '1px solid black' }}>
                {articleElements}
            </ul>
        )
    }
}


ArticleListComponent.defaultProps = {
    articles: []
}

ArticleListComponent.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleListComponent