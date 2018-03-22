/*
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY'
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_PRIVACY_FILTER = 'SET_PRIVACY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const PrivacyFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PUBLIC: 'SHOW_PUBLIC',
    SHOW_SENSITIVE: 'SHOW_SENSITIVE',
    SHOW_PRIVATE: 'SHOW_PRIVATE'
};


/*
 * action creators
 */

let nextEntryId = 0

export function addEntry(text, mType, privacy) {
    return { type: ADD_ENTRY, id: nextEntryId++, m_type: mType, privacy: privacy, text }
}

export function toggleEntry(id) {
    return { type: TOGGLE_ENTRY, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function setPrivacyFilter(filter) {
    return { type: SET_PRIVACY_FILTER, filter }
}