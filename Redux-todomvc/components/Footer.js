import React, {PropTypes, Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>123</strong> left
                </span>
                <ul className="filters">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Completed</a></li>
                </ul>
                <button className="clear-completed">Clear Completed</button>
            </footer>
        )

    }
}


export default Footer;