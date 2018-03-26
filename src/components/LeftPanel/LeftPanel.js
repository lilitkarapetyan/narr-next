import React from "react";
import Filters from "./Filters";
import ScrollingView from "./ScrollingView";
import { withState } from "recompose";
import { Button } from "reactstrap";
import "./LeftPanel.css";
import styled from "styled-components";
import Icon from "react-fontawesome";

const ExpandStyle = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  border-style : solid;
  border-color:black;
  border-width : 1px;
  border-radius : 50%;
  padding-right:7px;
  padding-left:7px;
  padding-top:1px;
  padding-bottom:1px;
  background : lightgray;
  transition: all 0.5s ease;
  &:hover {
    background: darkgray;
  }
`;

const ExpandButton = ({ onClick, expanded }) => (
  <ExpandStyle onClick={onClick}>
    <Icon size="1x" name={expanded ? "chevron-left" : "chevron-right"} />{" "}
  </ExpandStyle>
);

const LeftPanel = ({ toggleExpand, expanded }) => (
  <div className="left-panel" style={{ padding: "10px", height: "100%" }}>
    <ExpandButton expanded={expanded} onClick={toggleExpand} />
    <Filters />
    <ScrollingView />
  </div>
);

export default LeftPanel;
