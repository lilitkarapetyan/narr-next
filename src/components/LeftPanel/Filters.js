import { Button, ButtonGroup } from "reactstrap";
import React from "react";

const Filters = () => (
  <React.Fragment>
    <h4>Filters</h4>
    <ButtonGroup>
      <Button>Recent </Button>
      <Button>Private</Button>
    </ButtonGroup>
  </React.Fragment>
);

export default Filters;
