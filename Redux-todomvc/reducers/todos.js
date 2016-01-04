const initialState = {
    text: 'Use Redux',
    compoleted: false,
    id: 0
}

export default function todos(state =  initialState){
    return [{}, ...state]
}