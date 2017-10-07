import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Filters from './Filters'
import Counter from './Counter'
import {connect} from 'react-redux'
class App extends Component {
    state = {
        username: ''
    }

    render() {
        const {username} = this.state

        return (
            <div>
                <h1>App name</h1>
                <Counter />
                User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <Filters articles = {this.props.articles}/>
                <ArticleList />
            </div>
        )
    }

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default connect((state) => {
    return {
        articles: state.articles
    }
})(App)