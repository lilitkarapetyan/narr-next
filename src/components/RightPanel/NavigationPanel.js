import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Compass } from "../Widgets";
import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const SettingsCategory = ({ collapse, speed }) => (
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
        <Icon name="cog" size="2x" /> <span>Widgets Demo</span>
      </CardHeader>
      <CardBody>
        <div
          className="justify-content-md-center "
          style={{ padding: "10px", width: "100%" }}
        >
          <Compass speed={speed} direction={45} />
        </div>
        <span>
          <b>speed:</b>
          {speed}
        </span>
      </CardBody>
    </Card>
  </Col>
);

SettingsCategory.propTypes = {
  collapse: PropTypes.bool,
  speed: PropTypes.any
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
