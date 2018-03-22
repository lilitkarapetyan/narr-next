/*
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY'
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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