import { AutoSizer } from "react-virtualized";
import { connect } from "react-redux";
import { listenEvent } from "../../reducers/Selectors";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Pointer = styled.path`
  transform: translate(50%, 50%);
  transition: all 0.3s ease-out;
  translate(50%, 50%) 
  rotate(0deg)
  scale(1)
`;

const Compass = ({ info }) => (
  <AutoSizer style={{ width: "100%", height: "100%" }}>
    {({ width, height }) => {
      const { Speed, Course } = info.fields || { Speed: "0", Course: "0" };
      const velocity = parseFloat(Speed) || 0;
      const direction = parseFloat(Course) || 0;
      const dimension = Math.min(width, height);
      const radius = (dimension - 8) / 2;
      const scale = 2.0 * (dimension / 156.0);
      const pointerSize = velocity / 100 * scale;
      const path = "M0 22 L4 26 L4 -22 L0 -28 L-4 -22 L-4 26 Z";
      console.warn(velocity);
      return (
        <svg style={{ width: "100%", height: "100%" }}>
          <circle cx="50%" cy="50%" r={radius} fill="gray" />
          <g stroke="black" strokeWidth="3" strokeLinecap="round">
            <Pointer
              d={path}
              style={{
                transform: `translate(50%, 50%) rotate(${direction}deg) scale(${scale})`
              }}
            />
          </g>
          <g stroke="red" strokeWidth="3" strokeLinecap="round" fill="red">
            <Pointer
              d={path}
              style={{
                transform: ` translate(50%, 50%) rotate(${direction}deg)  scaleX(0.3) scaleY(${pointerSize})`,
                transformOrigin: "50% -50%"
              }}
            />
          </g>
        </svg>
      );
    }}
  </AutoSizer>
);

Compass.propTypes = {
  info: PropTypes.shape({ Speed: PropTypes.number, Course: PropTypes.number })
    .isRequired
};
export default connect(state => ({
  info: listenEvent("manoeuvre")(state) || {}
}))(Compass);
