import { Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { listenEvent } from "../../reducers/Selectors";
import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const MastButton = styled(Button)`
  height: 100%;
  width: 100%;
`;

const Mast = ({ masts, addEntry }) => (
  <Row className="no-gutters" style={{ width: "100%", height: "100%" }}>
    {masts.map(mast => (
      <Col lg={4}>
        <MastButton
          outline
          color="primary"
          onClick={() =>
            addEntry({
              mType: mast.status.mType === "mast-up" ? "mast-down" : "mast-up",
              fields: {
                Type: mast.name,
                Reason: "Widget Trigger"
              },
              status: "completed",
              category: "Underwater"
            })
          }
        >
          <Icon
            name={mast.status.mType === "mast-up" ? "arrow-up" : "arrow-down"}
            size="3x"
          />
          <br />
          {mast.name}
        </MastButton>
      </Col>
    ))}
  </Row>
);

Mast.propTypes = {
  masts: PropTypes.array.isRequired,
  addEntry: PropTypes.func.isRequired
};

export default connect((state, ownProps) => ({
  masts: ownProps.config.masts.map(mast => ({
    name: mast,
    status: listenEvent(entry => entry.fields.Type === mast)(state) || {}
  }))
}))(Mast);
