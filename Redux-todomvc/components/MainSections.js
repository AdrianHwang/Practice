import React, {PropTypes, Component} from 'react'

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
                        <li key={todo.id}>
                            <div className="view">
                                <input type="checkbox" className="toggle" name="" id=""/>
                                <label>{todo.text}</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
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