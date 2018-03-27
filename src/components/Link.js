import PropTypes from "prop-types";
import React from "react";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <button className="btn btn-main">{children}</button>;
  }

  return (
    <button
      className="btn btn-secondary"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
