import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    state = {
        openItemId: null
    }

    toggleItem = (openItemId) => {
        return  (ev) => {
            this.setState({
                openItemId: this.state.openItemId === openItemId ? null : openItemId
            })
        }

    }


    render() {
        return <OriginalComponent {...this.props} openItemId = {this.state.openItemId} toggleItem = {this.toggleItem}/>
    }
}