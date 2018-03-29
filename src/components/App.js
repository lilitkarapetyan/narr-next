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
  <Row style={{ width: "100%", minHeight: "100%" }}>
    <Col lg={expanded ? 10 : 3}>
      <LeftPanel toggleExpand={toggleExpand} expanded={expanded} />
    </Col>
    <Col lg={expanded ? 2 : 9}>
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
      expanded: state.ui.expanded
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
    componentWillUnmount() {
      this.generators.forEach(gen => gen.Clear());
    }
  })
);

export default enhancer(App);
