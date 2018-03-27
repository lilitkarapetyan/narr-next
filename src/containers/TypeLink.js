import { connect } from "react-redux";
import { setTypeFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.typeFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setTypeFilter(ownProps.filter));
  }
});

const TypeFilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default TypeFilterLink;
