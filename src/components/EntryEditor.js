import { EntryType } from "./Schemas";
import { compose, lifecycle, mapProps, withState } from "recompose";
import { set } from "lodash";
import EntryModal from "./RightPanel/EntryModal";
import EntryStatus from "./Schemas/EntryStatus";
import PropTypes from "prop-types";
import React from "react";

const EntryEditor = ({
  entry,
  toggle,
  active,
  onSubmit,
  values,
  setValues,
  inline
}) => (
  <EntryModal
    inline={inline}
    values={values}
    setValue={setValues}
    visible={active}
    entry={entry}
    toggle={toggle}
    onSubmit={onSubmit}
  />
);
const enhancer = compose(
  lifecycle({
    componentDidMount() {
      if (this.props.entry && !this.props.values) {
        this.props.setValues({ ...this.props.entry.fields });
      }
    },
    componentWillUpdate(nextProps) {
      if (nextProps.entry !== this.props.entry) {
        this.props.setValues({ ...nextProps.entry.fields });
      }
    }
  }),
  mapProps(props => ({
    ...props,
    values: props.values,
    setValues: (label, val) => {
      const nValues = { ...props.values };
      props.setValues(set(nValues, label, val));
    },
    onSubmit: () => {
      const entry = {
        ...props.entry,
        fields: props.values,
        status: EntryStatus.Completed
      };
      props.onSubmit(entry);
    },
    entry: props.entry,
    active: props.active,
    toggle: (clear = true) => {
      props.setActive(!props.active);
      if (clear) props.setValues(props.entry.fields);
    },
    setActive: props.setActive
  }))
);

EntryEditor.propTypes = {
  entry: EntryType.isRequired,
  toggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf.isRequired,
  setValues: PropTypes.func.isRequired,
  inline: PropTypes.bool.isRequired
};

export const EntryEditorUnControlled = enhancer(EntryEditor);

const enhancer2 = compose(withState("values", "setValues", null), enhancer);

export default enhancer2(EntryEditor);
