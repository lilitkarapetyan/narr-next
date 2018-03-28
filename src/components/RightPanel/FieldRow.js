import { Col, FormFeedback, FormGroup, Label } from "reactstrap";
import { FieldType } from "../Schemas";
import Input from "./Inputs";
import PropTypes from "prop-types";
import React from "react";

const FieldRow = ({ field, value, onChange, validator }) => {
  const message = validator.message(
    field.name,
    value,
    `required|${field.type}`
  );
  const isValid = validator.fieldValid(field.name);

  return (
    <FormGroup row>
      <Label sm={4}>{field.name}</Label>
      <Col sm={8}>
        <Input
          invalid={!isValid}
          valid={isValid}
          value={value}
          onChange={onChange}
          type={field.type}
          placeholder={field.placeholder || ""}
        />
        <FormFeedback>{message}</FormFeedback>
      </Col>
    </FormGroup>
  );
};

FieldRow.propTypes = {
  field: FieldType.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  validator: PropTypes.object.isRequired
};

FieldRow.defaultValues = {
  value: ""
};

export default FieldRow;
