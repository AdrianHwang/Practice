import React, {PropTypes, Component} from 'react'
import TodoItem from "./TodoItem"

class MainSections extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {}
    }
    render(){
        const {todos, actions } = this.props
        const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
        return (
            <section className="main">
                <input type="checkbox"
                       className="toggle-all"
                       checked={completedCount === todos.length}
                       onChange={actions.completeAll}/>
                <ul className="todo-list">
                    {todos.map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    )}
                </ul>
            </section>
        )
    }
}

MainSections.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSections;