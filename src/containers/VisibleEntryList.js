import { connect } from 'react-redux'
import { toggleEntry } from '../actions'
import EntryList from '../components/EntryList'
import {VisibilityFilters, PrivacyFilters, TimeFilters} from "../actions";

export const getVisibleEntries = (entries, visibilityFilter, privacyFilter, timeFilter) => {

    if(visibilityFilter !== VisibilityFilters.SHOW_ALL) {
        switch (visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                return entries;
            case VisibilityFilters.SHOW_SELECTED:
                return entries.filter(t => t.selected);
            case VisibilityFilters.SHOW_ACTIVE:
                return entries.filter(t => !t.selected);
            default:
                return entries;
        }
    }
    else if(privacyFilter !== PrivacyFilters.SHOW_ALL)
    {
        switch (privacyFilter) {
            case PrivacyFilters.SHOW_ALL:
                return entries;
            case PrivacyFilters.SHOW_PUBLIC:
                return entries.filter(t => t.privacy === 'public');
            case PrivacyFilters.SHOW_SENSITIVE:
                return entries.filter(t => t.privacy === 'sensitive');
            case PrivacyFilters.SHOW_PRIVATE:
                return entries.filter(t => t.privacy === 'private');
            default:
                return entries;
        }
    }
    else if(timeFilter !== TimeFilters.SHOW_ALL)
    {
        switch (timeFilter) {
            case TimeFilters.SHOW_ALL:
                return entries;
            case TimeFilters.SHOW_LAST_MIN:
                return entries.filter(t => (new Date() -  t.created) < 60 * 1000);
            case TimeFilters.SHOW_LAST_5_MIN:
                return entries.filter(t => (new Date() -  t.created) < 5 * 60 * 1000);
            default:
                return entries;
        }
    }
    else
    {
        return entries;
    }
};

const mapStateToProps = state => {
    return {
        entries: getVisibleEntries(state.entries, state.visibilityFilter, state.privacyFilter, state.timeFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEntryClick: id => {
            dispatch(toggleEntry(id))
        }
    }
};

const VisibleEntryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryList)

export default VisibleEntryList
