import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSections from '../components/MainSections'
import * as TodoActions from '../actions/todos'


class App extends Component {
    render() {
        const {todos, actions} = this.props
        console.log(this.props);
        return (
                <div>
                    <Header addTodo={actions.addTodo}/>
                    <MainSections todos={todos} actions={actions}/>
                </div>
            )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    abc: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        todos: state.todos,
        abc: state.abc
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(App);
