import React, {Component} from 'react'
import PropTypes from 'prop-types'

const stylesContainer = {
    border: '1px solid black',
    width: '50%',
    margin: '20px',
    padding: '10px'
}
const stylesAuthor = {
    'fontWeight': 'bold',
    'textAlign': 'right',
    'paddingRight': '50px'
}
class Comment extends Component {
    static defaultProps = {

    };

    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.string
        })
    }

    render() {
        const {data} = this.props

        return <div style={stylesContainer}>

            <p>{data.text}</p>

            <div style={stylesAuthor}>
                {data.user}
            </div>
            
        </div>
    }
}


export default Comment