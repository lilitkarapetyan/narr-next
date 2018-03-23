import { combineReducers } from 'redux'
import entries from './entries'
import visibilityFilter from './visibilityFilter'
import privacyFilter from './privacyFilter'
import timeFilter from './timeFilter'


const entryApp = combineReducers({
    visibilityFilter,
    privacyFilter,
    timeFilter,
    entries
});

export default entryApp