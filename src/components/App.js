import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { Row, Col } from "reactstrap";
import { withState, compose, mapProps } from "recompose";

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
const enhancer = compose(
  withState("expanded", "setExpand", false),
  mapProps(props => ({
    expanded: props.expanded,
    toggleExpand: () => props.setExpand(!props.expanded)
  }))
);

export default enhancer(App);
