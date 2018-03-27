import { FieldType } from "../Schemas";
import { Form } from "reactstrap";
import FieldRow from "./FieldRow";
import PropTypes from "prop-types";
import React from "react";

const EntriesForm = ({ fields }) => (
  <Form>
    {fields.map(field => <FieldRow key={field.name} field={field} />)}
  </Form>
);

EntriesForm.propTypes = {
  fields: PropTypes.arrayOf(FieldType).isRequired
};
export default EntriesForm;
