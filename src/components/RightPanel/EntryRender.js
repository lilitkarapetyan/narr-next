import { Button } from "reactstrap";
import { EntryType } from "../Schemas";
import { compose, mapProps, withState } from "recompose";
import EntryModal from "./EntryModal";
import PropTypes from "prop-types";
import React from "react";

export const EntryRenderUnControlled = ({
  entry,
  toggleModal,
  modalVisible
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
    <EntryModal visible={modalVisible} entry={entry} toggle={toggleModal} />
  </div>
);

EntryRenderUnControlled.propTypes = {
  entry: EntryType.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

const enhancer = compose(
  withState("modalVisible", "setModalVisible", false),
  mapProps(props => ({
    entry: props.entry,
    modalVisible: props.modalVisible,
    toggleModal: () => props.setModalVisible(!props.modalVisible),
    setModalVisible: props.setModalVisible
  }))
);

export default enhancer(EntryRenderUnControlled);
