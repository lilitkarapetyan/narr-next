import { ADD_ENTRY } from "../actions";

const uniqueTypes = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY:
      state.push(action.payload.mType);
      return [...new Set(state)];
    default:
      return state;
  }
};

export default uniqueTypes;
