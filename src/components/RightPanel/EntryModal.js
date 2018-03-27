import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { EntryType } from "../Schemas";
import EntryFormRender from "./EntriesForm";
import PropTypes from "prop-types";
import React from "react";

const EntryModal = ({ entry, visible, toggle }) => (
  <Modal isOpen={visible} toggle={toggle}>
    <ModalHeader toggle={toggle}>{entry.name}</ModalHeader>
    <ModalBody>
      <EntryFormRender fields={entry.fields} />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Accept
      </Button>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

EntryModal.propTypes = {
  entry: EntryType.isRequired,
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default EntryModal;
