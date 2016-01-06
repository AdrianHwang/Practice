import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

class TodoItem extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            editing: false
        }
    }
    render () {
        const {todo, deleteTodo, completeTodo} = this.props
        let liClassName = classNames({
            completed: todo.completed
        })
        return (
            <li className={liClassName}>
                <div className="view">
                    <input type="checkbox"
                           className="toggle"
                           checked={todo.completed}
                           onChange={()=> completeTodo(todo.id)}/>
                    <label>{todo.text}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}


TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
}


export default TodoItem;