import { CategoryType } from "./Schemas";
import { Col, Row } from "reactstrap";
import { ToggleUiExpand, addEntry } from "../actions";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import EntryStatus from "./Schemas/EntryStatus";
import Generator from "../Generator";
import LeftPanel from "./LeftPanel";
import PropTypes from "prop-types";
import React from "react";
import RightPanel from "../containers/RightPanel";

const App = ({ expanded, toggleExpand, config }) => (
  <Row
    style={{
      width: "100%",
      height: "100%",
      paddingRight: "0",
      paddingLeft: "0px",
      margin: "0px"
    }}
  >
    <Col lg={expanded ? 10 : 3}>
      <LeftPanel toggleExpand={toggleExpand} expanded={expanded} />
    </Col>
    <Col
      style={{
        overflowY: "auto",
        overflowX: "none",
        maxHeight: "100%",
        padding: "0px"
      }}
      lg={expanded ? 2 : 9}
    >
      <RightPanel collapse={expanded} categories={config.categories} />
    </Col>
  </Row>
);

App.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  config: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(CategoryType)
  }).isRequired
};

const enhancer = compose(
  connect(
    state => ({
      config: state.ui.config,
      expanded: state.ui.expanded,
      running: state.simulation.running
    }),
    {
      addEntry,
      toggleExpand: ToggleUiExpand
    }
  ),
  lifecycle({
    componentDidMount() {
      this.generators = this.props.config.categories.map(
        x =>
          new Generator(x, entry =>
            this.props.addEntry(entry, EntryStatus.Empty)
          )
      );
    },
    componentWillUpdate(nextProps) {
      this.generators.forEach(gen => gen.Active(nextProps.running));
    },
    componentWillUnmount() {
      this.generators.forEach(gen => gen.Clear());
    }
  })
);

export default enhancer(App);
