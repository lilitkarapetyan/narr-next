import { Card, CardBody, Col, Badge, Collapse, Row } from "reactstrap";
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
  entry: { text, id, created, m_type, privacy }
}) => (
  <div
    role="button"
    onClick={() => {
      onClick();
      setOpen(!open);
    }}
  >
    <div
      style={{
        backgroundColor: selected ? "#FFFFFF" : "transparent"
      }}
    >
      <span>
        {created.toLocaleTimeString()}  {id}
        <Badge style={{ margin:"2px",width: "100px" }}>{m_type}</Badge>
        <Badge>
          {privacy}
        </Badge>
      </span>

      <span style={{ paddingLeft: "10px" }}>
        {Object.keys(text).map(key => (
          <span style={{ paddingLeft: "5px" }}>
            <b>{key}</b> : {text[key]}
          </span>
        ))}
      </span>
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
