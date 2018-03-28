import { FieldType } from "../Schemas";
import { Form } from "reactstrap";
import FieldRow from "./FieldRow";
import PropTypes from "prop-types";
import React from "react";

const EntriesForm = ({ fields, saveValue, values, validator }) => (
  <Form>
    {fields.map((field, idx) => (
      <FieldRow
        autoFocus={idx === 0 && Object.keys(values).length === 0}
        key={field.name}
        field={field}
        value={values[field.name]}
        onChange={val => saveValue(field.name, val)}
        validator={validator}
      />
    ))}
  </Form>
);

EntriesForm.propTypes = {
  fields: PropTypes.arrayOf(FieldType).isRequired,
  saveValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  validator: PropTypes.object.isRequired
};

export default EntriesForm;
