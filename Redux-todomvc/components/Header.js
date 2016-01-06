import React, {PropTypes, Component} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
    handleSave(text){
        if(text.length !== 0){
            this.props.addTodo(text)
        }
    }

    render(){
        return (
            <header className="header">
                <h1>任务</h1>
                <TodoTextInput 
                    newTodo
                    placeholder = "添加任务"
                    onSave={this.handleSave.bind(this)}/>
            </header>
            )
    }
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Header;