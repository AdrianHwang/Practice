import React, {PropTypes, Component} from 'react'

class Footer extends Component {
    constructor(props, context){
        super(props, context)
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
                    <li><a href="#">All</a></li>
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Completed</a></li>
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