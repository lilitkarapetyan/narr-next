import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { CategoryType } from "../Schemas";
import EntryRender from "./EntryRender";
import NavigationPanel from "./NavigationPanel";
import PropTypes from "prop-types";
import React from "react";

const CategoryRender = ({ category, collapse, addEntry }) => (
  <Col lg={collapse ? 12 : 6} style={{ padding: "5px" }}>
    <Card style={{ height: "100%" }}>
      <CardHeader
        className="bg-primary text-center text-white"
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder"
        }}
      >
        {category.name}
      </CardHeader>
      <CardBody>
        <Row
          className="justify-content-md-center "
          style={{ padding: "10px", width: "100%" }}
        >
          {category.entries.map(entry => (
            <Col key={entry.id} lg={collapse ? 12 : 6}>
              <EntryRender
                entry={entry}
                onSubmit={en => addEntry({ ...en, category: category.name })}
              />
            </Col>
          ))}
          {category.name === "General" && (
            <NavigationPanel speed={100} angle={80} />
          )}
        </Row>
      </CardBody>
    </Card>
  </Col>
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
