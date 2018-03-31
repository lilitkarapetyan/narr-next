import { CategoryType } from "../Schemas";
import { Col } from "reactstrap";
import EntryRender from "./EntryRender";
import Panel from "./Panel";
import PropTypes from "prop-types";
import React from "react";

const CategoryRender = ({ category, collapse, addEntry }) => (
  <Panel
    style={{ borderWidth: "3px", borderColor: `${category.color}` }}
    title={category.name}
    open={collapse}
    lg={collapse ? 12 : 6}
  >
    {category.entries.map(entry => (
      <Col key={entry.id} lg={collapse ? 12 : 6}>
        <EntryRender
          entry={entry}
          onSubmit={en => addEntry({ ...en, category: category.name })}
        />
      </Col>
    ))}
  </Panel>
);

CategoryRender.propTypes = {
  category: CategoryType.isRequired,
  collapse: PropTypes.bool,
  addEntry: PropTypes.func.isRequired
};

CategoryRender.defaultProps = {
  collapse: false
};

export default CategoryRender;
