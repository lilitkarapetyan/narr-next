import { createSelector } from "reselect";

export const getEntries = state => state.entries;

export const entryTypes = createSelector([getEntries], entries => {
  const result = {};
  entries.forEach(ent => {
    result[ent.mType] = true;
  });
  return Object.keys(result);
});
