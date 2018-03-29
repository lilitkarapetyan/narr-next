import { createSelector } from "reselect";
import moment from "moment";

export const getEntries = state => state.entries;

export const listenEvent = type =>
  createSelector([getEntries], entries => {
    const filtered = entries.filter(enty => enty.mType === type);
    const sorted = filtered.sort((x, y) =>
      moment(x.created).isAfter(moment(y.created) ? 1 : -1)
    );
    if (sorted.length > 0) return sorted[0];
    return null;
  });
