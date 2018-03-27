import { Card, CardBody, Col, Collapse, Row } from "reactstrap";
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
      <Row className="justify-content-md-center  text-center align-middle">
        <Col lg={1}>{id}</Col>
        <Col lg={8}>
          <div style={{ fontSize: "18px", fontWeight: "bolder" }}>{m_type}</div>
        </Col>
        <Col lg={3} style={{ textTransform: "uppercase" }}>
          {privacy}
        </Col>
      </Row>

      <Collapser open={open}>
        {Object.keys(text).map(key => (
          <div>
            {key} : {text[key]}
          </div>
        ))}
      </Collapser>
      <Row style={{ textAlign: "right" }}>
        <div
          style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px", width: "100%" }}
        >
          created : {created.toLocaleTimeString()}
        </div>
      </Row>
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
