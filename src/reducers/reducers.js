import { combineReducers } from "redux";
import Simulation from "./Simulation";
import UserInterface from "./UserInterface";
import entries from "./entries";
import privacyFilter from "./privacyFilter";
import searchKeyword from "./searchKeyword";
import timeFilter from "./timeFilter";
import typeFilter from "./typeFilter";
import uniqueTypes from "./uniqueTypes";
import visibilityFilter from "./visibilityFilter";

const entryApp = combineReducers({
  ui: UserInterface,
  visibilityFilter,
  privacyFilter,
  timeFilter,
  typeFilter,
  entries,
  simulation: Simulation,
  uniqueTypes,
  searchKeyword
});

export default entryApp;
