import { Badge, Card, CardBody } from "reactstrap";
import { EntryType } from "./Schemas";
import { withState } from "recompose";
import PropTypes from "prop-types";
import React from "react";

const Entry = ({ selected, entry: { text, id, created, mType, privacy } }) => (
  <Card
    className="inner-filter"
    style={{
      borderWidth: "2px",
      backgroundColor: selected ? "#FFFFFF" : "transparent",
      padding: "0px",
      margin: "5px"
    }}
  >
    <CardBody style={{ padding: "0rem", fontSize: "12px" }}>
      <div>
        {created.toLocaleTimeString()}
        <Badge style={{ margin: "2px", width: "90px" }}>{mType}</Badge>
        <Badge>{privacy}</Badge>
      </div>

      <div style={{ paddingLeft: "10px" }}>
        {Object.keys(text).map(key => (
          <span style={{ paddingLeft: "5px" }}>
            <b>{key}</b>: {text[key]}
          </span>
        ))}{" "}
        ({id})
      </div>
    </CardBody>
  </Card>
);

Entry.propTypes = {
  entry: EntryType.isRequired,
  selected: PropTypes.bool.isRequired
};

const enhanced = withState("open", "setOpen", false);

export default enhanced(Entry);
