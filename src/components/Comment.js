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

function Comment(props) {

    const {data} = props

    return (
            <div style={stylesContainer}>

                <p>{data.text}</p>

                <div style={stylesAuthor}>
                    {data.user}
                </div>

            </div>
        )


}

Comment.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
};
export default Comment