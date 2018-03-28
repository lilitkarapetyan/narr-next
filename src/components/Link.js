import PropTypes from "prop-types";
import React from "react";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <div className="btn btn-main">{children}</div>;
  }

  return (
    <div
      role="button"
      className="btn btn-secondary"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </div>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
