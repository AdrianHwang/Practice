import React, {PropTypes, Component} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
    render(){
        return (
            <header className="header">
                <h1>Todos</h1>
                <TodoTextInput />
            </header>
            )
    }
}

export default Header;