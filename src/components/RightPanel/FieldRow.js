import { Col, FormGroup, Input, Label } from "reactstrap";
import { FieldType } from "../Schemas";
import React from "react";

const FieldRow = ({ field }) => (
  <FormGroup row>
    <Label sm={2}>{field.name}</Label>
    <Col sm={10}>
      <Input type={field.type} placeholder={field.placeholder || ""} />
    </Col>
  </FormGroup>
);

FieldRow.propTypes = {
  field: FieldType.isRequired
};

export default FieldRow;
