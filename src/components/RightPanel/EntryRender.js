import { Button } from "reactstrap";
import { EntryType } from "../Schemas";
import { compose, mapProps, withState } from "recompose";
import { set } from "lodash";
import EntryModal from "./EntryModal";
import PropTypes from "prop-types";
import React from "react";

const EntryRender = ({
  entry,
  toggleModal,
  modalVisible,
  onSubmit,
  values,
  setValues
}) => (
  <div>
    <Button
      outline
      color="secondary"
      onClick={toggleModal}
      style={{ width: "100%", height: "100%", margin: "5px" }}
    >
      {entry.name}
    </Button>
    <EntryModal
      values={values}
      setValue={setValues}
      visible={modalVisible}
      entry={entry}
      toggle={toggleModal}
      onSubmit={onSubmit}
    />
  </div>
);

const enhancer = compose(
  mapProps(props => ({
    values: props.values,
    setValues: (label, val) => {
      const nValues = { ...props.values };
      props.setValues(set(nValues, label, val));
    },
    onSubmit: () => {
      // join to string

      props.onSubmit(props.values, props.entry.name, "public");
    },
    entry: props.entry,
    modalVisible: props.modalVisible,
    toggleModal: () => props.setModalVisible(!props.modalVisible),
    setModalVisible: props.setModalVisible
  }))
);

export const EntryRenderUnControlled = enhancer(EntryRender);

EntryRender.propTypes = {
  entry: EntryType.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.object,
  setValues: PropTypes.func.isRequired
};

const enhancer2 = compose(
  withState("values", "setValues", {}),
  withState("modalVisible", "setModalVisible", false),
  enhancer
);

export default enhancer2(EntryRender);
