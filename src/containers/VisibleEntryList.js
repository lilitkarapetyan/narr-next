import {
  PrivacyFilters,
  TimeFilters,
  VisibilityFilters,
  toggleEntry
} from "../actions";
import { connect } from "react-redux";
import EntryList from "../components/EntryList";
import Fuse from "fuse-js-latest";
import _ from "lodash";

export const getVisibleEntries = (
  entries,
  visibilityFilter,
  privacyFilter,
  timeFilter,
  typeFilters,
  searchKeyword
) => {
  let entriesE = entries;
  if (visibilityFilter !== VisibilityFilters.SHOW_ALL) {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return entriesE;
      case VisibilityFilters.SHOW_SELECTED:
        return entriesE.filter(t => t.selected);
      case VisibilityFilters.SHOW_ACTIVE:
        return entriesE.filter(t => !t.selected);
      default:
        return entriesE;
    }
  }
  if (privacyFilter !== PrivacyFilters.SHOW_ALL) {
    switch (privacyFilter) {
      case PrivacyFilters.SHOW_ALL:
        break;
      case PrivacyFilters.SHOW_PUBLIC:
        entriesE = entriesE.filter(t => t.privacy === "public");
        break;
      case PrivacyFilters.SHOW_SENSITIVE:
        entriesE = entriesE.filter(t => t.privacy === "sensitive");
        break;
      case PrivacyFilters.SHOW_PRIVATE:
        entriesE = entriesE.filter(t => t.privacy === "private");
        break;
      default:
        break;
    }
  }
  if (timeFilter !== TimeFilters.SHOW_ALL) {
    switch (timeFilter) {
      case TimeFilters.SHOW_ALL:
        break;
      case TimeFilters.SHOW_LAST_MIN:
        entriesE = entriesE.filter(t => Date.now(true) - t.created < 60 * 1000);
        break;
      case TimeFilters.SHOW_LAST_5_MIN:
        entriesE = entriesE.filter(
          t => Date.now(true) - t.created < 5 * 60 * 1000
        );
        break;
      default:
        break;
    }
  }
  if (typeFilters && typeFilters.length > 1) {
    entriesE = _.filter(entriesE, x => typeFilters.includes(x.mType));
  }
  if (searchKeyword && searchKeyword.length > 0) {
    const options = {
      shouldSort: true,
      tokenize: true,
      matchAllTokens: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name", "mType", "category", "privacy", "fields.Comment"]
    };

    const fuse = new Fuse(entriesE || [], options);
    return fuse.search(searchKeyword || "");
  }

  // if (searchKeyword && searchKeyword.length > 0) {
  //   entriesE.forEach(ob => {
  //     Object.keys(ob).forEach(x => {
  //       if (typeof ob[x] === "string") {
  //         if (ob[x].toLowerCase().includes(searchKeyword.toLowerCase())) {
  //           searchResult.push(ob);
  //         }
  //       } else if (typeof ob[x] === "object") {
  //         Object.values(ob[x]).forEach(i => {
  //           alert(i);
  //           if (i.toLowerCase().includes(searchKeyword.toLowerCase())) {
  //             searchResult.push(ob);
  //           }
  //         });
  //       }
  //     });
  //   });
  //   entriesE = [...new Set(searchResult)];
  //   searchResult = [];
  /*
    * small but static solution:
    * entriesE=_.filter(entriesE,(e)=>{

      return e.mType.includes(searchKeyword)||e.privacy.includes(searchKeyword)||e.category.includes(searchKeyword)||e.status.includes(searchKeyword)||e.fields.Comment&&e.fields.Comment.includes(searchKeyword);
    });
    *
    * */

  return entriesE;
};

const mapStateToProps = state => ({
  entries: getVisibleEntries(
    state.entries,
    state.visibilityFilter,
    state.privacyFilter,
    state.timeFilter,
    state.typeFilter,
    state.searchKeyword
  )
});

const mapDispatchToProps = dispatch => ({
  onEntryClick: id => {
    dispatch(toggleEntry(id));
  }
});

const VisibleEntryList = connect(mapStateToProps, mapDispatchToProps)(
  EntryList
);

export default VisibleEntryList;
