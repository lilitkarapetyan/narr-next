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

let nextTodoId = 0

export function addTodo(text) {
    return { type: ADD_ENTRY, id: nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_ENTRY, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}