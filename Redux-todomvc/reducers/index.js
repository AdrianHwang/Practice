import { combineReducers } from 'redux'
import todos from './todos'
import abc from './abc'

const rootReducer = combineReducers({
    abc: abc,
    todos: todos
});

export default rootReducer