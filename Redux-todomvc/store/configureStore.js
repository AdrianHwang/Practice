import { createStore } from 'redux'

export default function configureStore(initiaState) {
    const reducer = function() {};
    const store = createStore(reducer, initiaState);

    return store;
}