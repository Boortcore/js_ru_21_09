import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        comments: PropTypes.array
    }

    state = {
        isOpen: false
    }
    render() {
        let {comments} = this.props
        let {isOpen} = this.state

        const body = comments ?
            comments.map(comment => {
                return <div key={comment.id}><Comment data={comment}/></div>
            }) : <h3>No Comments</h3>

        return (
            <div>
                <button onClick={this.toggleCommentList} >{isOpen ? 'Close comments' : 'Open comments'}</button>
                {isOpen && body}
            </div>

        )

    }


    toggleCommentList = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



export default CommentList