import {
  ADD_ENTRY,
  ClearEntries,
  DeleteEntry,
  TOGGLE_SELECTED,
  UpdateEntry,
  addEntries
} from "../actions";
import { handleActions } from "redux-actions";
import EntryStatus from "../components/Schemas/EntryStatus";
import moment from "moment";
import persist from "./PersistentUtils";

let nextEntryId = -1;
const generateId = events => {
  if (events.length === 0) return 0;
  if (nextEntryId !== -1) return ++nextEntryId;
  /* eslint-disable-next-line */
  nextEntryId = (Math.max.apply(Math, events.map(x => x.id)) || 0) + 1;
  return nextEntryId;
};
const initialState = [];
const reducer = handleActions(
  {
    [addEntries]: (state, { payload }) => [
      ...state,
      ...payload.map(entry => ({
        fields: entry.fields || {},
        ...entry,
        id: nextEntryId++,
        status: entry.status || EntryStatus.Empty,
        revisions: [],
        created: moment(Date.now(true))
          .utc()
          .format()
      }))
    ],
    [DeleteEntry]: (state, { payload }) => [...state.filter(x => x.id !== payload)],
    [UpdateEntry]: (state, { payload }) => {
      const items = [...state];
      const updated = payload;

      // find the entry matching the current one
      const match = items.filter(ent => payload.id === ent.id);

      // what's it's index?
      const index = items.indexOf(match[0]);

      // set the edit as complete
      updated.status = EntryStatus.Completed;
      // store previous version
      updated.revisions = [
        ...match[0].revisions,
        {
          ...match[0],
          editAt: moment(Date.now())
            .utc()
            .format()
        }
      ];
      // replace the existing item with this one
      items[index] = updated;

      // return the updated list
      return [...items];
    },
    [ClearEntries]: () => [],
    [ADD_ENTRY]: (state, { payload }) => [
      ...state,
      {
        ...payload,
        id: generateId(state),
        status: payload.status || EntryStatus.Empty,
        revisions: [],
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

export default persist(reducer, "entries");
