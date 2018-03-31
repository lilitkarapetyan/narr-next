import { Button, ButtonGroup } from "reactstrap";
import React from "react";
import Export from "../../containers/Export";

const Filters = () => (
  <React.Fragment>
    <h4>Filters</h4>
    <ButtonGroup>
      <Button>Recent </Button>
      <Button>Private</Button>
    </ButtonGroup>
    <Export/>
  </React.Fragment>
);

export default Filters;
