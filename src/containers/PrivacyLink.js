import { connect } from "react-redux";
import { setPrivacyFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.privacyFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setPrivacyFilter(ownProps.filter));
  }
});

const PrivacyLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default PrivacyLink;
