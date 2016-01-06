import React, {PropTypes, Component} from 'react'
import TodoItem from "./TodoItem"

class MainSections extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {}
    }
    render(){
        const {todos, actions } = this.props
        return (
            <section className="main">
                <input type="checkbox" name="" className="toggle-all" id="" />
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