import { Col, FormGroup, Input, Label } from "reactstrap";
import { FieldType } from "../Schemas";
import PropTypes from "prop-types";
import React from "react";

const FieldRow = ({ field, value, onChange }) => (
  <FormGroup row>
    <Label sm={2}>{field.name}</Label>
    <Col sm={10}>
      <Input
        value={value}
        onChange={evt => onChange(evt.target.value)}
        type={field.type}
        placeholder={field.placeholder || ""}
      />
    </Col>
  </FormGroup>
);

FieldRow.propTypes = {
  field: FieldType.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

FieldRow.defaultValues = {
  value: ""
};

export default FieldRow;
