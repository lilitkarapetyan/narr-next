import { Button } from "reactstrap";
import { ToggleModalEdit } from "../../actions";
import { connect } from "react-redux";
import Icon from "react-fontawesome";
import Panel from "./Panel";
import PropTypes from "prop-types";
import React from "react";

const SettingsCategory = ({ collapse, toggleModalEdit, modalEdit }) => (
  <Panel
    open={collapse}
    title={
      <React.Fragment>
        <Icon name="cog" /> Settings Demo
      </React.Fragment>
    }
    inverse
    lg={collapse ? 12 : 6}
    style={{ backgroundColor: "#333", borderColor: "#333" }}
  >
    <Button
      outline
      active={modalEdit}
      color="primary"
      onClick={toggleModalEdit}
      style={{ width: "100%", height: "100%", margin: "5px" }}
    >
      ModalEdit
    </Button>
  </Panel>
);

SettingsCategory.propTypes = {
  collapse: PropTypes.bool,
  toggleModalEdit: PropTypes.func.isRequired,
  modalEdit: PropTypes.bool
};

SettingsCategory.defaultProps = {
  collapse: false
};

const enhancer = connect(
  state => ({
    modalEdit: state.ui.useModalEdit
  }),
  {
    toggleModalEdit: ToggleModalEdit
  }
);
export default enhancer(SettingsCategory);
