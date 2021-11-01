import { combineReducers } from 'redux'
import sectionReducer from './section/section.reducer'

export default combineReducers({
    section: sectionReducer
})