import { Badge, Card, CardBody } from "reactstrap";
import { EntryType } from "./Schemas";
import { UpdateEntry } from "../actions";
import { compose, withState } from "recompose";
import { connect } from "react-redux";
import EntryEditor from "./EntryEditor";
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

const Entry = ({
  selected,
  entry,
  useModalEdit,
  expandedView,
  editMode,
  setEditMode,
  updateEntry
}) => {
  const { id, created, mType, privacy, fields } = entry;

  return (
    <div>
      <Card
        className="inner-filter"
        style={{
          borderWidth: "2px",
          backgroundColor: selected ? "#FFFFFF" : "transparent",
          padding: "0px",
          margin: "5px"
        }}
        onDoubleClick={() => setEditMode(true)}
      >
        <CardBody style={{ padding: "0rem", fontSize: "12px" }}>
          <div>
            {moment.utc(created).format()}
            <Badge style={{ margin: "2px", width: "90px" }}>{mType}</Badge>
            <Badge>{privacy}</Badge>
          </div>

          <div style={{ paddingLeft: "10px" }}>
            {Object.keys(fields).map(key => (
              <span key={key} style={{ paddingLeft: "5px" }}>
                <b>{key}</b>: {fields[key]}
              </span>
            ))}{" "}
            ({id})
          </div>
          <EntryEditor
            inline={!useModalEdit}
            expanded={expandedView}
            entry={entry}
            active={editMode}
            setActive={setEditMode}
            onSubmit={updateEntry}
          />
        </CardBody>
      </Card>
    </div>
  );
};

Entry.propTypes = {
  entry: EntryType.isRequired,
  selected: PropTypes.bool.isRequired
};

Entry.propTypes = {
  entry: EntryType.isRequired,
  selected: PropTypes.bool,
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
  expandedView: PropTypes.bool.isRequired,
  useModalEdit: PropTypes.bool.isRequired,
  updateEntry: PropTypes.func.isRequired
};

const enhanced = compose(
  connect(
    state => ({
      expandedView: state.ui.expanded,
      useModalEdit: state.ui.useModalEdit
    }),
    {
      updateEntry: UpdateEntry
    }
  ),
  withState("editMode", "setEditMode", false),
  withState("open", "setOpen", false)
);

export default enhanced(Entry);
