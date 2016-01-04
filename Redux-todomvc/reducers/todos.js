import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [{
    text: 'Use Redux',
    compoleted: false,
    id: 0
}]

export default function todos(state = initialState, action){
    switch (action.type) {
        case ADD_TODO:
            return [...state];
        case DELETE_TODO:
            return [{}]
        case EDIT_TODO:
        case COMPLETE_TODO:
        case COMPLETE_ALL:
        case CLEAR_COMPLETED:
            return [{}]
        default:
             return [{}]
    }
}