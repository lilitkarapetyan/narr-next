import { Bordered } from "../StyledComponents";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

const CategoryRender = ({ category, collapse }) => (
  <Col lg={collapse ? 12 : 6}>
    <Bordered>
      <h4 className="text-center">{category}</h4>
    </Bordered>
  </Col>
);

CategoryRender.propTypes = {
  category: PropTypes.arrayOf(PropTypes.string),
  collapse: PropTypes.bool
};

CategoryRender.defaultProps = {
  collapse: false,
  category: []
};

export default CategoryRender;
