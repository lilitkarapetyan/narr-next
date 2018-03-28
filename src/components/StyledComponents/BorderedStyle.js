import styled from "styled-components";

export default styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: ${props => (props.radius ? props.radius : 10)}px;
  padding: 10px;
`;
