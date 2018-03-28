import { connect } from "react-redux";
import React from "react";
import VisibleEntryList from "./../../containers/VisibleEntryList";

const ScrollingView = () => (
  <div
    style={{
      position: "absolute",
      overflowX: "hidden",
      overflowY: "auto",
      padding: "0rem"
    }}
  >
    <VisibleEntryList />
  </div>
);

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(ScrollingView);
