import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
    render() {
        return (
            <input className="edit new-todo"
                   type="text"
                   placeholder="what do you want to do?"
                   autoFocus = "true" />
        )
    }
}

export default TodoTextInput;