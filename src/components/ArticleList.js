import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {
    state = {
        error: null
    }

    render() {
        const {articles} = this.props
        if (this.state.error) return <h2>Error: {this.state.error.message}</h2>
        if (!articles.length) return <h3>No Articles</h3>

        let selectedIds = this.props.selected.map(article => article.value)
        let fromDate = this.props.dates.from
        let toDate = this.props.dates.to
        const articleElements = articles.map((article) => {
            let dateOfArticle = new Date(article.date);
            return (
                selectedIds.includes(article.id) && dateOfArticle >= fromDate && dateOfArticle <= toDate ?
                <li key={article.id}>
                    <Article article={article}
                             isOpen={article.id === this.state.openItemId}
                             onButtonClick={this.toggleOpenItemMemoized(article.id)}
                    />
                </li> : null
            )
        })

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error, info) {
        console.log('---', 123, error, info)
        this.setState({ error })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => ({
    articles: state.articles,
    selected: state.selected,
    dates: state.dates
}))(ArticleList)