import React, {PropTypes, Component} from 'react'

class MainSections extends Component {
    render(){
        return (
            <section className="main">
                <input type="checkbox" name="" className="toggle-all" id="" />
                <ul className="todo-list">
                    <li>
                        <div className="view">
                            <input type="checkbox" className="toggle" name="" id=""/>
                            <label>abc</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default MainSections;