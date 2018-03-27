import { FieldType } from "../Schemas";
import { Form } from "reactstrap";
import FieldRow from "./FieldRow";
import PropTypes from "prop-types";
import React from "react";

const EntriesForm = ({ fields, saveValue, values }) => (
  <Form>
    {fields.map(field => (
      <FieldRow
        key={field.name}
        field={field}
        value={values[field.name]}
        onChange={val => saveValue(field.name, val)}
      />
    ))}
  </Form>
);

EntriesForm.propTypes = {
  fields: PropTypes.arrayOf(FieldType).isRequired,
  saveValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default EntriesForm;
