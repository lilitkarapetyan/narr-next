import {
  ADD_ENTRY,
  ClearEntries,
  TOGGLE_SELECTED,
  UpdateEntry
} from "../actions";
import { handleActions } from "redux-actions";
import EntryStatus from "../components/Schemas/EntryStatus";
import moment from "moment";
import persist from "./PersistentUtils";

let nextEntryId = 0;

const initialState = [];
const reducer = handleActions(
  {
    [UpdateEntry]: (state, { payload }) => {
      const items = state;
      const updated = payload;

      // find the entry matching the current one
      const match = items.filter(ent => payload.id === ent.id);

      // what's it's index?
      const index = items.indexOf(match[0]);

      // set the edit as complete
      updated.status = EntryStatus.Complete;

      // replace the existing item with this one
      items[index] = updated;

      // return the updated list
      return items;
    },
    [ClearEntries]: () => [],
    [ADD_ENTRY]: (state, { payload }) => [
      ...state,
      {
        ...payload,
        id: nextEntryId++,
        status: payload.status || EntryStatus.Empty,
        created: moment(Date.now(true))
          .utc()
          .format()
      }
    ],
    [TOGGLE_SELECTED]: (state, action) =>
      state.map(
        entry =>
          entry.id === action.id
            ? { ...entry, selected: !entry.selected }
            : entry
      )
  },
  initialState
);

export default persist(reducer);
