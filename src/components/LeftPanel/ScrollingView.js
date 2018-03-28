import { connect } from "react-redux";
import React from "react";
import VisibleEntryList from "./../../containers/VisibleEntryList";

const ScrollingView = () => (
  <div className="card-body-scroll">
    <div>Scrolling View</div>
    <ul>
      <VisibleEntryList />
    </ul>
  </div>
);

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(ScrollingView);
