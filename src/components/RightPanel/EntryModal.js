import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { EntryType } from "../Schemas";
import EntryFormRender from "./EntriesForm";
import FormValidator from "../../Validator";
import PropTypes from "prop-types";
import React from "react";

class EntryModal extends React.PureComponent {
  constructor(s) {
    super(s);
    this.validator = FormValidator();
    this.validator.showMessages();
  }

  componentDidMount() {}
  render() {
    const {
      entry,
      visible,
      toggle,
      setValue,
      values,
      onSubmit,
      inline,
      onCancel
    } = this.props;

    const valid =
      this.validator.allValid() && (values && Object.keys(values).length > 0);
    const Body = entry ? (
      <React.Fragment>
        <ModalBody>
          <EntryFormRender
            fields={entry.fields}
            entry={entry}
            saveValue={setValue}
            values={values}
            validator={this.validator}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={!valid}
            color="primary"
            onClick={() => {
              if (valid) {
                onSubmit();
                toggle();
              } else {
                this.forceUpdate();
              }
            }}
          >
            Accept
          </Button>
          <Button color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </React.Fragment>
    ) : (
      <Alert color="warning"> No Entry Avaiable</Alert>
    );
    if (!visible) return null;
    if (inline && visible) return <div>{Body}</div>;
    return (
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader toggle={toggle}>{entry.name}</ModalHeader>
        {Body}
      </Modal>
    );
  }
}

EntryModal.propTypes = {
  entry: EntryType.isRequired,
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  values: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  inline: PropTypes.bool,
  onCancel: PropTypes.func.isRequired
};

export default EntryModal;
