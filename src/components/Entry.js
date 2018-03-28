import { Card, CardBody, Collapse } from "reactstrap";
import { EntryType } from "./Schemas";
import { withState } from "recompose";
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
  entry: { text, id, created, mType, privacy }
}) => (
  <div
    className="card-filter-data"
    role="button"
    onClick={() => {
      onClick();
      setOpen(!open);
    }}
  >
    <div
      className="inner-filter"
      style={{
        backgroundColor: selected ? "#FFFFFF" : "transparent"
      }}
    >
      <div className="justify-content-md-center  text-center align-middle">
        <div className="data-field">{created.toLocaleTimeString()}</div>
        <div className="data-field">{id}</div>
        <div className="data-field">
          <div className="filter-type">{mType}</div>
        </div>
        <div className="data-field">
          <div className="filter-type">{privacy}</div>
        </div>
      </div>
      <div className="data-comment-text">
        <b>Comment: </b>
        <p>{text}</p>
      </div>
      <div />
    </div>
  </div>
);

Entry.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  entry: EntryType.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

const enhanced = withState("open", "setOpen", false);

export default enhanced(Entry);
