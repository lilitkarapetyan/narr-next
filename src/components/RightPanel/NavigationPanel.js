import { Compass } from "../Widgets";
import Panel from "./Panel";
import PropTypes from "prop-types";
import React from "react";

const SettingsCategory = ({ collapse }) => (
  <Panel open={collapse} lg={collapse ? 12 : 6} title="Widgets">
    <Compass speed={50} direction={45} />
  </Panel>
);

SettingsCategory.propTypes = {
  collapse: PropTypes.bool
};

SettingsCategory.defaultProps = {
  collapse: false
};

export default SettingsCategory;
