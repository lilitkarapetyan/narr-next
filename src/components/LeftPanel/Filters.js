import {
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { PrivacyFilters, TimeFilters, TypeFilters } from "../../actions";
import Export from "../../containers/Export";
import PrivacyLink from "../../containers/PrivacyLink";
import React from "react";
import TimeLink from "./../../containers/TimeLink";
import TypeFilterLink from "../../containers/TypeLink";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: {
        Time: false,
        Privacy: false,
        Type: false
      }
    };
    // Bind the methods to the correct "this" context. SO when we access this in the functions we actually acess the class instance.
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    window.onload = function() {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          document.getElementById(
            "txtBuildDateTime"
          ).innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "/static/assets/Last_build", true);
      xhttp.send();
    };
  }

  toggle(e) {
    const { isExpanded } = this.state;
    Object.keys(isExpanded).forEach(x => {
      isExpanded[x] = isExpanded[x] === e.target.parentElement.id;
    });
    isExpanded[e.target.parentElement.id] = !this.state.isExpanded[
      e.target.parentElement.id
    ];
    this.setState({ isExpanded });
  }

  render() {
    return (
      <React.Fragment>
        <h4>Filters</h4>
        <ButtonGroup>
          <ButtonDropdown
            id="Time"
            isOpen={this.state.isExpanded.Time}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Time</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <TimeLink filter={TimeFilters.SHOW_LAST_5_MIN}>
                  last 5 mins
                </TimeLink>
              </DropdownItem>
              <DropdownItem>
                <TimeLink filter={TimeFilters.SHOW_LAST_MIN}>last min</TimeLink>
              </DropdownItem>
              <DropdownItem>
                <TimeLink filter={TimeFilters.SHOW_ALL}>Show all</TimeLink>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown
            id="Privacy"
            isOpen={this.state.isExpanded.Privacy}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Privacy</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <PrivacyLink filter={PrivacyFilters.SHOW_PUBLIC}>
                  Public
                </PrivacyLink>
              </DropdownItem>
              <DropdownItem>
                <PrivacyLink filter={PrivacyFilters.SHOW_PRIVATE}>
                  Private
                </PrivacyLink>
              </DropdownItem>
              <DropdownItem>
                <PrivacyLink filter={PrivacyFilters.SHOW_ALL}>
                  Show all
                </PrivacyLink>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown
            id="Type"
            isOpen={this.state.isExpanded.Type}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Type</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <TypeFilterLink filter={TypeFilters.SHOW_WEATHER}>
                  Only weather entries
                </TypeFilterLink>
              </DropdownItem>
              <DropdownItem>
                <TypeFilterLink filter={TypeFilters.SHOW_ALL}>
                  Show All
                </TypeFilterLink>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
        <ButtonGroup>
          <Export />
        </ButtonGroup>
      </React.Fragment>
    );
  }
}

// we can directly bind dispatch to a action by using the second parameters

export default Filters;
