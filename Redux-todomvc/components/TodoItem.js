import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            editing: false
        }
    }

    handleDoubleClick(){
        this.setState({
            editing: true
        })
    }

    handleSave(id, text){
        if(text.length ===0){
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id, text)
        }
        this.setState({editing: false});
    }

    render () {
        const {todo, deleteTodo, completeTodo} = this.props
        let liClassName = classNames({
            completed: todo.completed,
            editing: this.state.editing
        });

        let element

        if(this.state.editing){
            element = (
                <TodoTextInput text={todo.text}
                               editing={this.state.editing}
                               onSave={(text) => this.handleSave(todo.id, text)}/>
            )
        } else {
            element = (
                <div className="view">
                    <input type="checkbox"
                           className="toggle"
                           checked={todo.completed}
                           onChange={()=> completeTodo(todo.id)}/>
                    <label onDoubleClick={this.handleDoubleClick.bind(this)}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={()=> deleteTodo(todo.id)}/>
                </div>
            )
        }

        return (
            <li className={liClassName}>
                {element}
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