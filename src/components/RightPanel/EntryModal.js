import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { EntryType } from "../Schemas";
import EntryFormRender from "./EntriesForm";
import FormValidator from "../../Validator";
import PropTypes from "prop-types";
import React from "react";

class EntryModal extends React.PureComponent {
  constructor(s) {
    super(s);
    this.validator = FormValidator();
  }

  componentDidMount() {
    this.validator.showMessages();
    this.validator.allValid();
  }
  render() {
    const { entry, visible, toggle, setValue, values, onSubmit } = this.props;
    return (
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader toggle={toggle}>{entry.name}</ModalHeader>
        <ModalBody>
          <EntryFormRender
            fields={entry.fields}
            saveValue={setValue}
            values={values}
            validator={this.validator}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={
              !this.validator.allValid() || Object.keys(values).length === 0
            }
            color="primary"
            onClick={() => {
              if (this.validator.allValid()) {
                onSubmit();
                toggle();
              } else {
                this.validator.showMessages();
                this.forceUpdate();
              }
            }}
          >
            Accept
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

EntryModal.propTypes = {
  entry: EntryType.isRequired,
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EntryModal;
