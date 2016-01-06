import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: '全部任务',
    [SHOW_ACTIVE]: '正在进行的任务',
    [SHOW_COMPLETED]: '完成的任务'
}

class Footer extends Component {
    renderTodoCount(){
        const {activeCount} = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'
        return (
            <span className="todo-count">
                剩余 <strong style={{color: "Pink"}}><i>{activeCount}</i></strong> 条任务
            </span>
        )
    }

    renderClearButton(){
        const {completedCount, onClearCompleted } = this.props
        if(completedCount > 0){
            return (
                <button className="clear-completed"
                        style={{border: "1px solid lightblue", color: "lightblue"}}
                        onClick={onClearCompleted} >
                    清除完成了的任务
                </button>
            )
        }
    }

    renderFilterLink(filter){
        const title = FILTER_TITLES[filter]
        const {filter: selectedFilter, onShow} = this.props

        return (
            <a className={classnames({selected: filter === selectedFilter})}
               style={{cursor: 'pointer'}}
               onClick={() => onShow(filter)}>{title}</a>
        )
    }

    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                    {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
                        (
                            <li key={filter}>
                                {this.renderFilterLink(filter)}
                            </li>)
                    )}
                </ul>
                {this.renderClearButton()}
            </footer>
        )

    }
}

Footer.propsType = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
}


export default Footer;