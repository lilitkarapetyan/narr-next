import { combineReducers } from "redux";
import entries from "./entries";
import privacyFilter from "./privacyFilter";
import timeFilter from "./timeFilter";
import visibilityFilter from "./visibilityFilter";

const entryApp = combineReducers({
  visibilityFilter,
  privacyFilter,
  timeFilter,
  entries
});

export default entryApp;
