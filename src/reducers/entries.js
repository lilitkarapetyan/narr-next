import { ADD_ENTRY, TOGGLE_SELECTED, UpdateEntry } from "../actions";
import { handleActions } from "redux-actions";
import EntryStatus from "../components/Schemas/EntryStatus";
import moment from "moment";

let nextEntryId = 0;

const initialState = [];
const reducer = handleActions(
  {
    [UpdateEntry]: (state, { payload }) => {
      const n = state.filter(ent => payload.id !== ent.id);
      return [...n, { ...payload, status: EntryStatus.Complete }];
    },
    [ADD_ENTRY]: (state, { payload }) => [
      ...state,
      {
        ...payload,
        id: nextEntryId++,
        status: payload.status || EntryStatus.Empty,
        created: moment()
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

export default reducer;
