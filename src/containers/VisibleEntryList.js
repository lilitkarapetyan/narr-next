import { connect } from 'react-redux'
import { toggleEntry } from '../actions'
import EntryList from '../components/EntryList'

const getVisibleEntries = (entries, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return entries;
        case 'SHOW_COMPLETED':
            return entries.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return entries.filter(t => !t.completed);
        default:
            return entries;
    }
};

const mapStateToProps = state => {
    return {
        entries: getVisibleEntries(state.entries, state.visibilityFilter)
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