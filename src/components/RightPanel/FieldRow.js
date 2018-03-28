import { Col, FormFeedback, FormGroup, Label } from "reactstrap";
import { FieldType } from "../Schemas";
import Input from "./Inputs";
import PropTypes from "prop-types";
import React from "react";

const FieldRow = ({ field, value, onChange, validator, autoFocus }) => {
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
          innerRef={c => {
            if (c && autoFocus) c.focus();
          }}
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
  autoFocus: FieldType.bool,
  field: FieldType.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  validator: PropTypes.object.isRequired
};

FieldRow.defaultProps = {
  autoFocus: false,
  value: ""
};

export default FieldRow;
