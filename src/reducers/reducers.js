import { combineReducers } from 'redux'
import entries from './entries'
import visibilityFilter from './visibilityFilter'
import privacyFilter from './privacyFilter'

const entryApp = combineReducers({
    visibilityFilter,
    privacyFilter,
    entries
});

export default entryApp