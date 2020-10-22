import { combineReducers } from 'redux'
import notes from './notes'
import auth from './auth'


export default combineReducers({
    notes,
    auth
})