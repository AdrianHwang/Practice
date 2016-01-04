import React, {PropTypes, Component} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
    handleSave(text){
        if(text.length !== 0){
            console.log(text);
        }
    }

    render(){
        return (
            <header className="header">
                <h1>Todos</h1>
                <TodoTextInput 
                newTodo
                placeholder = "What needs to be done?"
                onSave={this.handleSave.bind(this)}/>
            </header>
            )
    }
}

export default Header;