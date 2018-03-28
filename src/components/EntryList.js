import { CardBody } from "reactstrap";
import { EntryType } from "./Schemas";
import Entry from "./Entry";
import PropTypes from "prop-types";
import React from "react";

const EntryList = ({ entries, onEntryClick }) => (
  <CardBody style={{ padding: "5px" }}>
    {entries.map((entry, index) => (
      <Entry key={entry.id} entry={entry} onClick={() => onEntryClick(index)} />
    ))}
  </CardBody>
);

EntryList.propTypes = {
  entries: PropTypes.arrayOf(EntryType).isRequired,
  onEntryClick: PropTypes.func.isRequired
};

export default EntryList;
