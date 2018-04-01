import { AutoSizer } from "react-virtualized";
import { connect } from "react-redux";
import { listenEvent } from "../../reducers/Selectors";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Pointer = styled.path`
  transition: all 0.3s ease-out;
`;

const Compass = ({ info }) => (
  <AutoSizer style={{ width: "100%", height: "100%" }}>
    {({ width, height }) => {
      const { Speed, Course } = info.fields || { Speed: "0", Course: "0" };
      const velocity = parseFloat(Speed) || Speed;
      const direction = parseFloat(Course) || Course;
      const dimension = Math.min(width, height);
      const radius = (dimension - 30) / 2;
      const scale = 1.9 * (dimension / 156.0);
      const path = "M0 22 L4 26 L4 -22 L0 -28 L-4 -22 L-4 26 Z";
      return (
        <svg style={{ width: "100%", height: "100%" }}>
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="rgba(80,60,138,0.3)"
            stroke="rgba(80,60,138,0.8)"
          />
          <g
            strokeLinecap="round"
            style={{
              transform: `translate(${width / 2}px, ${height / 2}px)`
            }}
          >
            <Pointer
              stroke="black"
              strokeWidth="3"
              d={path}
              style={{
                transform: ` rotate(${direction}deg) scale(${scale}) scaleX(0.5)`
              }}
            />
            <text
              fontFamily="Verdana"
              fontSize={6 * scale}
              fill="black"
              stroke="black"
              textAnchor="middle"
              style={{
                transformOrigin: "50% 50%",
                transform: `translate(0,${radius + 6}px)`,
                color: "white"
              }}
            >
              {parseInt(direction, 10)}º {parseInt(velocity, 10)} Kts
            </text>
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
