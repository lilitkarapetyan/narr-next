import { CardBody } from "reactstrap";
import { PrivacyFilters, TimeFilters, VisibilityFilters } from "../actions";
import FilterLink from "../containers/FilterLink";
import PrivacyLink from "../containers/PrivacyLink";
import React from "react";
import TimeLink from "../containers/TimeLink";

const Footer = () => (
  <CardBody>
    <CardBody>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Unselected</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_SELECTED}>Selected</FilterLink>
    </CardBody>
    <CardBody>
      Show: <PrivacyLink filter={PrivacyFilters.SHOW_ALL}>All</PrivacyLink>
      <PrivacyLink filter={PrivacyFilters.SHOW_PUBLIC}>Public</PrivacyLink>
      <PrivacyLink filter={PrivacyFilters.SHOW_SENSITIVE}>
        Sensitive
      </PrivacyLink>
      <PrivacyLink filter={PrivacyFilters.SHOW_PRIVATE}>Private</PrivacyLink>
    </CardBody>
    <CardBody>
      Show: <TimeLink filter={TimeFilters.SHOW_ALL}>All</TimeLink>
      <TimeLink filter={TimeFilters.SHOW_LAST_MIN}>last minute</TimeLink>
      <TimeLink filter={TimeFilters.SHOW_LAST_5_MIN}>last 5 mins</TimeLink>
    </CardBody>
  </CardBody>
);

export default Footer;
