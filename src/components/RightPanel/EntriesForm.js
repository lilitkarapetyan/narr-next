import { FieldType } from "../Schemas";
import { Form } from "reactstrap";
import { compose, mapProps } from "recompose";
import { connect } from "react-redux";
import FieldRow from "./FieldRow";
import PropTypes from "prop-types";
import React from "react";

const EntriesForm = ({ fields, saveValue, values, validator }) => (
  <Form>
    {fields.map((field, idx) => (
      <FieldRow
        autoFocus={idx === 0 && values && Object.keys(values).length === 0}
        key={field.name}
        field={field}
        value={(values && values[field.name]) || null}
        onChange={val => saveValue(field.name, val)}
        validator={validator}
      />
    ))}
  </Form>
);

EntriesForm.propTypes = {
  fields: PropTypes.arrayOf(FieldType).isRequired,
  saveValue: PropTypes.func.isRequired,
  values: PropTypes.objectOf.isRequired,
  validator: PropTypes.objectOf.isRequired
};

const mapFields = (fields, entry, config) => {
  if (!fields) return [];
  if (fields instanceof Array) return fields;
  if (!entry)
    throw new Error(
      "When using field values as object, Entry needs to be passed as props."
    );
  const findTypes = field => {
    const cat = config.categories.find(
      category => category.name === entry.category
    );
    const entries = cat.entries.find(et => et.id === entry.mType);
    const fld = entries.fields.find(f => f.name === field);
    return fld.type;
  };

  return Object.keys(fields).map(key => ({
    name: key,
    type: findTypes(key)
  }));
};
const enhancer = compose(
  connect(state => ({ config: state.ui.config })),
  mapProps(props => ({
    ...props,
    fields: mapFields(props.fields, props.entry, props.config)
  }))
);

export default enhancer(EntriesForm);
