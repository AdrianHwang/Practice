import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            text: this.props.text || ''
        }
    }

    handleBlur(e){
        if(!this.props.newTodo){
            this.props.onSave(e.target.value);
        }
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        const text = e.target.value.trim();
        if(e.which == 13){
            this.props.onSave(text)
            if(this.props.newTodo){
                this.setState({
                    text: ''
                })
            }
        }
    }

    render() {
        let inputClass = classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
        })
        return (
            <input className={inputClass}
                   type="text"
                   autoFocus = "true"
                   placeholder={this.props.placeholder}
                   value={this.state.text}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   onKeyDown={this.handleSubmit.bind(this)} />
        )
    }
}

TodoTextInput.PropTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
}

export default TodoTextInput;