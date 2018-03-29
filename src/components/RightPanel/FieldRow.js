import { Col, FormFeedback, FormGroup, Label } from "reactstrap";
import { FieldType } from "../Schemas";
import Input from "./Inputs";
import PropTypes from "prop-types";
import React from "react";

const FieldRow = ({ field, value, onChange, validator, autoFocus }) => {
  let message = "";
  try {
    message = validator.message(field.name, value, `required|${field.type}`);
  } catch (ex) {
    message = "Invalid type";
  }
  const isValid = validator.fieldValid(field.name);

  return (
    <FormGroup row>
      <Label sm={4}>{field.name}</Label>
      <Col sm={8}>
        <Input
          innerRef={c => {
            if (c && autoFocus) c.focus();
          }}
          invalid={!isValid}
          valid={isValid}
          value={value}
          onChange={val => {
            onChange(val);
            validator.message(field.name, val, `required|${field.type}`);
          }}
          type={field.type}
          placeholder={field.placeholder || ""}
        />
        <FormFeedback>{message}</FormFeedback>
      </Col>
    </FormGroup>
  );
};

FieldRow.propTypes = {
  autoFocus: PropTypes.bool,
  field: FieldType.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  validator: PropTypes.objectOf.isRequired
};

FieldRow.defaultProps = {
  autoFocus: false,
  value: ""
};

export default FieldRow;
