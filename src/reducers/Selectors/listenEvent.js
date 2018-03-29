import { createSelector } from "reselect";
import { getEntries } from "./entrySelectors";
import moment from "moment";

export const listenEvent = type =>
  createSelector([getEntries], entries => {
    const filtered = entries.filter(enty => enty.mType === type);
    const sorted = filtered.sort((x, y) =>
      moment(x.created).isAfter(moment(y.created) ? 1 : -1)
    );
    if (sorted.length > 0) return sorted[0];
    return null;
  });
