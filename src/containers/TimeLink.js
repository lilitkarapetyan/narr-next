import { connect } from 'react-redux'
import { setTimeFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.timeFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setTimeFilter(ownProps.filter))
        }
    }
}

const TimeLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default TimeLink