import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import ControllercitasReducer from './CitasDucks'

const rootReducer = combineReducers({
    citas :ControllercitasReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStotrecitas = () =>{
    const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)))
    return store
}

export default generateStotrecitas;