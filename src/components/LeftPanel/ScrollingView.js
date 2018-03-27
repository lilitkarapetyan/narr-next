import { connect } from "react-redux";
import React from "react";
import VisibleEntryList from "./../../containers/VisibleEntryList";

const ScrollingView = () => (
  <div
    style={{
      position: "absolute",
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      overflowX: "hidden",
      overflowY: "auto"
    }}
  >
    <VisibleEntryList />
  </div>
);

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(ScrollingView);
