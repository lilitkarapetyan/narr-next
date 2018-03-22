import { combineReducers } from 'redux'
import entries from './entries'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    visibilityFilter,
    entries
});

export default todoApp