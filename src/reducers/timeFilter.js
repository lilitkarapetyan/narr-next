import { SET_TIME_FILTER, TimeFilters } from "../actions";
import persist from "./PersistentUtils";

function timeFilter(state = TimeFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_TIME_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default persist(timeFilter);
