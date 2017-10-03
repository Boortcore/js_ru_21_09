import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import CustomDayPicker from './CustomDayPicker'


class App extends Component {
    state = {
        selected: null,
        username: ''
    }

    render() {
        const {articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {selected, username} = this.state

        return (
            <div>
                <h1>App name</h1>
                <CustomDayPicker />
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default App