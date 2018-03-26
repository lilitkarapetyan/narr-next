import PropTypes from "prop-types";
import React from "react";

const Entry = ({ onClick, selected, text, id, created, type, privacy }) => (
  <li role="button" onClick={onClick}>
    <div
      style={{
        backgroundColor: selected ? "#FFFFFF" : "transparent"
      }}
    >
      {text} {id} {created.toLocaleTimeString()} {type} {privacy}
    </div>
  </li>
);

Entry.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  type: PropTypes.string.isRequired,
  privacy: PropTypes.string.isRequired
};

export default Entry;
