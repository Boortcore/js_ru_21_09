import React, {Component as ReactComponent} from 'react'

class AccordionComponent extends ReactComponent {
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
}

export default AccordionComponent