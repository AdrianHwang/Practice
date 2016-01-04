import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initiaState) {
    
    const store = createStore(rootReducer, initiaState);

    return store;
}