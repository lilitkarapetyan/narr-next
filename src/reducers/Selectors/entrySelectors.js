import { createSelector } from "reselect";
import EntryStatus from "../../components/Schemas/EntryStatus";

export const getEntries = state => state.entries;

export const validEntries = createSelector([getEntries], entries =>
  entries.filter(x => x.status === EntryStatus.Completed)
);

export const entryTypes = createSelector([getEntries], entries => {
  const result = {};
  entries.forEach(ent => {
    result[ent.mType] = true;
  });
  return Object.keys(result);
});
