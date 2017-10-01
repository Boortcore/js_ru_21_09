import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import ArticleListComponent from './ArticleListComponent'
function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles={articles} />
            <ArticleListComponent articles={articles} />
        </div>
    )
}

export default App