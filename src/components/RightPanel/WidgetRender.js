import { Compass, Masts } from "../Widgets";
import { addEntry as addEntryAction } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const WidgetRender = ({ addEntry, config }) => {
  switch (config.id) {
    case "compass":
      return <Compass />;
    case "masts":
      return <Masts config={config} addEntry={addEntry} />;
    default:
      return <div> Invalid Widget {config.id}</div>;
  }
};

WidgetRender.propTypes = {
  addEntry: PropTypes.bool,
  config: PropTypes.shape({ id: PropTypes.string })
};

WidgetRender.defaultProps = {
  collapse: false
};

export default connect(null, {
  addEntry: addEntryAction
})(WidgetRender);
