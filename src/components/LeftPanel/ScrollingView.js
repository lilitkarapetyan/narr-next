import React from "react";

const ScrollingView = () => (
  <div
    style={{
      position: "absolute",
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      overflowX: "hidden",
      overflowY: "auto"
    }}
  >
    <div>Scrolling View</div>
  </div>
);
export default ScrollingView;
