import { Bordered } from "../StyledComponents";
import { Button, ButtonGroup } from "reactstrap";
import React from "react";

const Filters = () => (
  <Bordered className="text-center" style={{ height: "100px" }}>
    <h4>Filters</h4>
    <ButtonGroup>
      <Button>Recent </Button>
      <Button>Private</Button>
    </ButtonGroup>
  </Bordered>
);

export default Filters;
