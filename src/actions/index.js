/*
 * action types
 */

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SET_PRIVACY_FILTER = "SET_PRIVACY_FILTER";
export const SET_TIME_FILTER = "SET_TIME_FILTER";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";
export const REMOVE_TYPE_FILTER = "REMOVE_TYPE_FILTER";
export const SEARCH_VALUE = "SEARCH_VALUE";
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const PrivacyFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PUBLIC: "SHOW_PUBLIC",
  SHOW_SENSITIVE: "SHOW_SENSITIVE",
  SHOW_PRIVATE: "SHOW_PRIVATE"
};

export const TimeFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_LAST_MIN: "SHOW_LAST_MIN",
  SHOW_LAST_5_MIN: "SHOW_LAST_5_MIN"
};

export const TypeFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_WEATHER: "SHOW_WEATHER"
};

export const ExportFilters = {
  EXPORT_ENTRY_LIST_AS_PDF: "EXPORT_ENTRY_LIST_AS_PDF"
};

/*
 * action creators
 */
export * from "./simulation";
export * from "./ui";
export * from "./entries";

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function setPrivacyFilter(filter) {
  return { type: SET_PRIVACY_FILTER, filter };
}

export function setTypeFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export function setTimeFilter(filter) {
  return { type: SET_TIME_FILTER, filter };
}
