import { combineReducers } from 'redux'
import entries from './entries'
import visibilityFilter from './visibilityFilter'

const entryApp = combineReducers({
    visibilityFilter,
    entries
});

export default entryApp