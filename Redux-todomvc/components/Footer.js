import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

var FILTER_TITLES = {
    SHOW_ALL: 'All',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
}

class Footer extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {filter: "SHOW_ALL"}
    }

    render() {
        const {todos, actions} = this.props
        const leftCount = todos.reduce((count, todo) =>
                !todo.completed ? count + 1 : count, 0)
        const completedCount =  todos.length - leftCount
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{leftCount}</strong> Left
                </span>

                <ul className="filters">
                    {["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map(filter =>
                        (
                            <li key={filter}>
                                <a>
                                    {FILTER_TITLES[filter]}
                                </a>
                            </li>)
                    )}
                </ul>

                {!!completedCount && (
                <button className="clear-completed"
                        onClick={actions.clearCompleted}>
                    Clear Completed
                </button>)}
            </footer>
        )

    }
}

Footer.propsType = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}


export default Footer;