import { Card, CardBody, Col, Collapse, Row } from "reactstrap";
import { EntryType } from "./Schemas";
import { UpdateEntry } from "../actions";
import { compose, withState } from "recompose";
import { connect } from "react-redux";
import EntryEditor from "./EntryEditor";
import PropTypes from "prop-types";
import React from "react";

const Collapser = ({ open, children }) => (
  <Collapse isOpen={open}>
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  </Collapse>
);

Collapser.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

const Entry = ({
  open,
  setOpen,
  onClick,
  selected,
  editMode,
  setEditMode,
  expandedView,
  useModalEdit,
  entry,
  updateEntry
}) => {
  const { id, created, mType, privacy } = entry;
  return (
    <div
      role="button"
      onClick={() => {
        onClick();
        setOpen(!open);
      }}
    >
      <div
        onDoubleClick={() => setEditMode(true)}
        style={{
          backgroundColor: selected ? "#FFFFFF" : "transparent"
        }}
      >
        <Row className="justify-content-md-center  text-center align-middle">
          <Col lg={1}>{id}</Col>
          <Col lg={8}>
            <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
              {mType}
            </div>
          </Col>
          <Col lg={3} style={{ textTransform: "uppercase" }}>
            {privacy}
          </Col>
        </Row>
        <EntryEditor
          inline={!useModalEdit}
          expanded={expandedView}
          entry={entry}
          active={editMode}
          setActive={setEditMode}
          onSubmit={updateEntry}
        />
        <Row style={{ textAlign: "right" }}>
          <div
            style={{
              color: "rgba(0,0,0,0.6)",
              fontSize: "13px",
              width: "100%"
            }}
          >
            created : {created}
          </div>
        </Row>
        <div />
      </div>
    </div>
  );
};

Entry.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  entry: EntryType.isRequired,
  onClick: PropTypes.func.isRequired,
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
