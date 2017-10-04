import React, {Component} from 'react'

class CommentForm extends React.Component {
    state = {
        name: 'Enter name',
        text: 'Enter comment',
        formIsValid: false
    }

    limits = {
        max: 50,
        min: 10
    }
    
    render() {
        return <form >
            <textarea onChange={this.handleTextEnter} cols="30" rows="10" value={this.state.text} style={this.state.formIsValid ? {} : {border: '1px solid red'}}></textarea>
            <br/>
            <input onChange={this.handleNameEnter} value={this.state.name} type="text"/>
            <br/>
            <input onClick={this.handleClick} type="submit" value="Send" disabled={!this.state.formIsValid}/>
        </form>
    }

    handleTextEnter = (e) => {
        let textLength = e.target.value.length
        this.setState({
            text: e.target.value,
            formIsValid: textLength > this.limits.min && textLength < this.limits.max
        })
    }

    handleNameEnter = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            text: '',
            formIsValid: false
        })
    }
}

export default CommentForm