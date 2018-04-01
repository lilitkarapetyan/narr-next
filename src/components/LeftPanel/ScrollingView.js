import { connect } from "react-redux";
import React from "react";
import VisibleEntryList from "./../../containers/VisibleEntryList";

const ScrollingView = () => <VisibleEntryList />;

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(ScrollingView);
