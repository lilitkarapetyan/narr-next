import {SET_PRIVACY_FILTER, PrivacyFilters} from "../actions";

function privacyFilter(state = PrivacyFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_PRIVACY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default privacyFilter