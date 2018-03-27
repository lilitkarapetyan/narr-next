import { Bordered } from "../StyledComponents";
import { CategoryType } from "../Schemas";
import { Col, Row } from "reactstrap";
import EntryRender from "./EntryRender";
import PropTypes from "prop-types";
import React from "react";

const CategoryRender = ({ category, collapse }) => (
  <Col lg={collapse ? 12 : 6} style={{ padding: "5px" }}>
    <Bordered style={{ height: "100%" }}>
      <h4 className="text-center">{category.name}</h4>
      <Row
        className="justify-content-md-center "
        style={{ padding: "10px", width: "100%" }}
      >
        {category.entries.map(entry => (
          <Col key={entry.id} lg={collapse ? 12 : 6}>
            <EntryRender entry={entry} />{" "}
          </Col>
        ))}
      </Row>
    </Bordered>
  </Col>
);

CategoryRender.propTypes = {
  category: CategoryType.isRequired,
  collapse: PropTypes.bool
};

CategoryRender.defaultProps = {
  collapse: false
};

export default CategoryRender;
