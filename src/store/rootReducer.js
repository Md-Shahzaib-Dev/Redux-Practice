import { combineReducers } from 'redux'
import themeReducer from './Reducers/themeReducer'
import counterReducer from './Reducers/counterReducer';
import userReducers from './Reducers/userReducers'

const reducers = combineReducers({
    themeReducer,
    counterReducer,
    userReducers
})

export default reducers;