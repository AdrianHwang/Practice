import React, {PropTypes, Component} from 'react'

class TodoItem extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            editing: false
        }
    }
    render () {
        const {todo} = this.props
        return (
            <li>
                <div className="view">
                    <input type="checkbox" className="toggle" name="" id=""/>
                    <label>{todo.text}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}


TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}


export default TodoItem;