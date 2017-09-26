import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const comments = article.comments;
        
        const body = isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title} <br/>
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                <CommentList comments={comments} />
            </div>
        )
    }
}


export default Article