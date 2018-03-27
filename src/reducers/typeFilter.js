import { SET_TYPE_FILTER, TypeFilters } from "../actions";
import persist from "./PersistentUtils";

function typeFilter(state = TypeFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_TYPE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default persist(typeFilter);
