import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'


class App extends Component {
    render() {
        const {todos, actions} = this.props
        let addTodo =  function(text){
            console.log(text);
        }
        return (
                <div>
                    <Header addTodo={addTodo}/>
                </div>
            )
    }
}

App.propTypes = {

}


export default App;
