import { connect } from 'react-redux'
import { setPrivacyFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.privacyFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setPrivacyFilter(ownProps.filter))
        }
    }
}

const PrivacyLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default PrivacyLink