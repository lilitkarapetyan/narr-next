import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { ToggleModalEdit } from "../../actions";
import { connect } from "react-redux";
import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const SettingsCategory = ({ collapse, toggleModalEdit, modalEdit }) => (
  <Col lg={collapse ? 12 : 6} style={{ padding: "5px" }}>
    <Card
      style={{ height: "100%", backgroundColor: "#333", borderColor: "#333" }}
      inverse
    >
      <CardHeader
        className=" text-center text-white"
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder"
        }}
      >
        <Icon name="cog" size="2x" /> Settings Demo
      </CardHeader>
      <CardBody>
        <Row
          className="justify-content-md-center "
          style={{ padding: "10px", width: "100%" }}
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
        </Row>
      </CardBody>
    </Card>
  </Col>
);

SettingsCategory.propTypes = {
  collapse: PropTypes.bool,
  toggleModalEdit: PropTypes.func.isRequired,
  modalEdit: PropTypes.bool.isRequired
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
