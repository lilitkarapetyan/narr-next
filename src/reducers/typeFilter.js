import { REMOVE_TYPE_FILTER, SET_TYPE_FILTER, TypeFilters } from "../actions";

function typeFilter(state = [TypeFilters.SHOW_ALL], action) {
  switch (action.type) {
    case SET_TYPE_FILTER:
      state.push(action.filter);
      return [...new Set(state)];
    case REMOVE_TYPE_FILTER:
      state.splice(state.indexOf(action.filter), 1);
      return [...state];
    default:
      return state;
  }
}

export default typeFilter;
