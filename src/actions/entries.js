import { createAction } from "redux-actions";

export const ADD_ENTRY = "ADD_ENTRY";
export const TOGGLE_SELECTED = "TOGGLE_SELECTED";

export const ClearEntries = createAction("CLEAR_ENTRIES");

export function toggleEntry(id) {
  return { type: TOGGLE_SELECTED, id };
}

export const UpdateEntry = createAction("UPDATE_ENTRY");
export const addEntry = createAction("ADD_ENTRY");
