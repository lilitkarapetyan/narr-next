import {
  PrivacyFilters,
  TimeFilters,
  TypeFilters,
  VisibilityFilters,
  toggleEntry
} from "../actions";
import { connect } from "react-redux";
import EntryList from "../components/EntryList";

const getVisibleEntries = (
  entries,
  visibilityFilter,
  privacyFilter,
  timeFilter,
  typeFilters
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
        entriesE = entriesE.filter(t => new Date() - t.created < 60 * 1000);
        break;
      case TimeFilters.SHOW_LAST_5_MIN:
        entriesE = entriesE.filter(t => new Date() - t.created < 5 * 60 * 1000);
        break;
      default:
        break;
    }
  }
  if (typeFilters !== TypeFilters.SHOW_ALL) {
    switch (typeFilters) {
      case TypeFilters.SHOW_ALL:
        break;
      case TypeFilters.SHOW_WEATHER:
        entriesE = entriesE.filter(t => t.mType === "weather");
        break;
      default:
        break;
    }
  }
  return entriesE;
};

const mapStateToProps = state => ({
  entries: getVisibleEntries(
    state.entries,
    state.visibilityFilter,
    state.privacyFilter,
    state.timeFilter,
    state.typeFilter
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
