import { Button, ButtonGroup } from "reactstrap";
import { addEntry } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const AddEntry = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addEntry(input.value, "OOW Comment", "public"));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <ButtonGroup>
          <Button type="submit">Add Entry A</Button>
          <Button
            onClick={e => {
              e.preventDefault();
              dispatch(addEntry("lorem ipsum", "CO Comment", "sensitive"));
            }}
          >
            Add Entry B
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              dispatch(addEntry("lorem ipsum", "Weather", "private"));
            }}
          >
            Add Entry C
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              for (let i = 0; i < 100; i++) {
                dispatch(
                  addEntry(`lorem ipsum ${i}`, "New  contact", "public")
                );
              }
            }}
          >
            Add Bulk D
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

AddEntry.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddEntry);
