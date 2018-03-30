import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Compass } from "../Widgets";
import PropTypes from "prop-types";
import React from "react";

const SettingsCategory = ({ collapse }) => (
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
        Widgets
      </CardHeader>
      <CardBody>
        <Row
          className="justify-content-md-center "
          style={{ padding: "10px", width: "100%" }}
        >
          <Compass speed={50} direction={45} />
        </Row>
      </CardBody>
    </Card>
  </Col>
);

SettingsCategory.propTypes = {
  collapse: PropTypes.bool
};

SettingsCategory.defaultProps = {
  collapse: false
};

// const enhancer = connect(
//   state => ({
//     modalEdit: state.ui.useModalEdit
//   }),
//   {
//     toggleModalEdit: ToggleModalEdit
//   }
// );
export default SettingsCategory;
