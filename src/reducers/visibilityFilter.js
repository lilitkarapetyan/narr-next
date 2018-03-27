import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions";
import persist from "./PersistentUtils";

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default persist(visibilityFilter);
