import { combineReducers } from "redux";
import entries from "./entries";
import privacyFilter from "./privacyFilter";
import timeFilter from "./timeFilter";
import typeFilter from "./typeFilter";
import uniqueTypes from "./uniqueTypes";
import visibilityFilter from "./visibilityFilter";

const entryApp = combineReducers({
  visibilityFilter,
  privacyFilter,
  timeFilter,
  typeFilter,
  entries,
  uniqueTypes
});

export default entryApp;
