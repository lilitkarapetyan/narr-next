import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import EntryList from '../components/EntryList'

const getVisibleTodos = (entries, filter) => {
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
        entries: getVisibleTodos(state.entries, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryList)

export default VisibleTodoList