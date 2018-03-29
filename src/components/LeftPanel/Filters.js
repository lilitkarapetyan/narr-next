import {
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input
} from "reactstrap";
import {
  PrivacyFilters,
  TimeFilters,
  filter,
  unFilter,
  search
} from "../../actions";
import { connect } from "react-redux";
import PrivacyLink from "../../containers/PrivacyLink";
import React from "react";
import TimeLink from "./../../containers/TimeLink";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: {
        Time: false,
        Privacy: false,
        Type: false
      },
      checkboxValues: {},
      searchKeyword: ""
    };
    // Bind the methods to the correct "this" context. SO when we access this in the functions we actually access the class instance.
    this.toggle = this.toggle.bind(this);
    //this.checkboxHandler=this.checkboxHandler(this)
    //arrow function didnt have to bind and if we bind them that will cause problem to function logic
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
  checkboxHandler = e => {
    const { checkboxValues } = this.state;
    checkboxValues[e.target.id] = !this.state.checkboxValues[e.target.id];
    this.setState({ checkboxValues });
    this.state.checkboxValues[e.target.id]
      ? this.props.filter(e.target.id)
      : this.props.unFilter(e.target.id);
  };
  searchBarHandler = e => {
    this.setState({ searchKeyword: e.target.value }, () => {
      this.props.search(this.state.searchKeyword);
    });
  };

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
              {this.props.uniqueTypes &&
                this.props.uniqueTypes.map(x => {
                  return (
                    <div
                      className={
                        this.state.checkboxValues[x]
                          ? "btn-drop btn-primary"
                          : "btn-drop btn-secondary"
                      }
                    >
                      <input
                        type="checkbox"
                        id={x}
                        onClick={this.checkboxHandler}
                        value={this.state.checkboxValues[x]}
                      />
                      <span>{x}</span>
                    </div>
                  );
                })}
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
        <Input
          placeholder={"search"}
          value={this.state.searchKeyword}
          onChange={this.searchBarHandler}
        />
      </React.Fragment>
    );
  }
}

// we can directly bind dispatch to a action by using the second parameters
const mapStateToProps = state => {
  return { uniqueTypes: state.uniqueTypes };
};
export default connect(mapStateToProps,{ filter, unFilter, search })(Filters);
