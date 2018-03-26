import styled from "styled-components";

const Bordered = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: ${props => (props.radius ? props.radius : 10)}px;
  padding: 10px;
`;

export default Bordered;
