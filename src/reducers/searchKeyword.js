import { SEARCH_VALUE } from "../actions";

function searchKeyword(state = "", action) {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.keyword;
    default:
      return state;
  }
}

export default searchKeyword;
