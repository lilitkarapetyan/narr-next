import React from "react";
import { Col, Button } from "reactstrap";
import { Bordered } from "../StyledComponents";

const CategoryRender = ({ category, collapse }) => (
  <Col lg={(collapse ?  12 : 6)}>
    <Bordered>
      <h4 className="text-center">{category}</h4>
    </Bordered>
  </Col>
);

export default CategoryRender;
