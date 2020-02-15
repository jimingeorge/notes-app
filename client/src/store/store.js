import {createStore , combineReducers, applyMiddleware} from 'redux'
//import usersReducer from '../reducers/usersReducer'
import notesReducer from '../reducers/notesReducer.js'
import thunk from 'redux-thunk'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        // users:usersReducer,
        notes:notesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore