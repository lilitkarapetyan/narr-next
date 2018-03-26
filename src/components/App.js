import { Col, Row } from "reactstrap";
import { compose, mapProps, withState } from "recompose";
import LeftPanel from "./LeftPanel";
import PropTypes from "prop-types";
import React from "react";
import RightPanel from "./RightPanel";

const App = ({ expanded, toggleExpand }) => (
  <Row style={{ width: "100%", minHeight: "100%" }}>
    <Col lg={expanded ? 10 : 3}>
      <LeftPanel toggleExpand={toggleExpand} expanded={expanded} />
    </Col>
    <Col lg={expanded ? 2 : 9}>
      <RightPanel
        collapse={expanded}
        categories={["Common", "Cat 1", "Cat 2"]}
      />
    </Col>
  </Row>
);

App.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired
};

const enhancer = compose(
  withState("expanded", "setExpand", false),
  mapProps(props => ({
    expanded: props.expanded,
    toggleExpand: () => props.setExpand(!props.expanded)
  }))
);

export default enhancer(App);
