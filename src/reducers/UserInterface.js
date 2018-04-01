import { ToggleModalEdit, ToggleUiExpand } from "../actions";
import { handleActions } from "redux-actions";
import UiConfiguration from "../UiConfig";
import persist from "./PersistentUtils";

const initialState = {
  config: UiConfiguration,
  expanded: false,
  useModalEdit: false
};

const reducer = handleActions(
  {
    [ToggleUiExpand]: state => ({ ...state, expanded: !state.expanded }),
    [ToggleModalEdit]: state => ({
      ...state,
      useModalEdit: !state.useModalEdit
    })
  },
  initialState
);

export default persist(reducer, "ui");
