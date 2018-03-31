import { createSelector } from "reselect";
import { validEntries } from "./entrySelectors";
import moment from "moment";

export const listenEvent = type =>
  createSelector([validEntries], entries => {
    let filtered = [];
    if (typeof type === "string") {
      filtered = entries.filter(enty => enty.mType === type);
    } else {
      filtered = entries.filter(type);
    }
    const sorted = filtered.sort((x, y) =>
      moment(x.created).isAfter(moment(y.created) ? 1 : -1)
    );
    if (sorted.length > 0) return sorted[0];

    return filtered;
  });
