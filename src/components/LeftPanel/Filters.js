import {Button, ButtonGroup, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import React from "react";
import {connect} from 'react-redux';
import {addEntry, PrivacyFilters, TimeFilters, TypeFilters} from "../../actions";
import TimeLink from "./../../containers/TimeLink";
import PrivacyLink from "../../containers/PrivacyLink"
import TypeFilterLink from '../../containers/TypeLink';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: {
        Time: false,
        Privacy: false,
        Type: false
      }
    }
  }

  addEntries = () => {
    for (let i = 0; i < 50; i++) {
      debugger;
      this.props.dispatch(addEntry(`lorem ipsum ${i}`, ["New contact", "weather"][Math.floor(Math.random() * 2)], ["public", "private"][Math.floor(Math.random() * 2)]));
    }
  };

  toggle = (e) => {
    const {isExpanded} = this.state;
    Object.keys(isExpanded).forEach(x => isExpanded[x] !== e.target.parentElement.id ? isExpanded[x] = false : '');
    isExpanded[e.target.parentElement.id] = !this.state.isExpanded[e.target.parentElement.id];
    this.setState({isExpanded});
  };

  render() {
    return (
      <React.Fragment>
        <h4>Filters</h4>
        <Button onClick={this.addEntries}>add 50</Button>
        <ButtonGroup>
          <ButtonDropdown id='Time' isOpen={this.state.isExpanded.Time} toggle={this.toggle}>
            <DropdownToggle caret>
              Time
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><TimeLink filter={TimeFilters.SHOW_LAST_5_MIN}>last 5 mins</TimeLink></DropdownItem>
              <DropdownItem><TimeLink filter={TimeFilters.SHOW_LAST_MIN}>last min</TimeLink></DropdownItem>
              <DropdownItem><TimeLink filter={TimeFilters.SHOW_ALL}>Show all</TimeLink></DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown id={'Privacy'} isOpen={this.state.isExpanded.Privacy} toggle={this.toggle}>
            <DropdownToggle caret>
              Privacy
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><PrivacyLink filter={PrivacyFilters.SHOW_PUBLIC}>Public</PrivacyLink></DropdownItem>
              <DropdownItem><PrivacyLink filter={PrivacyFilters.SHOW_PRIVATE}>Private</PrivacyLink></DropdownItem>
              <DropdownItem><PrivacyLink filter={PrivacyFilters.SHOW_ALL}>Show all</PrivacyLink></DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown id={'Type'} isOpen={this.state.isExpanded.Type} toggle={this.toggle}>
            <DropdownToggle caret>
              Type
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><TypeFilterLink filter={TypeFilters.SHOW_WEATHER}>Only weather
                entries</TypeFilterLink></DropdownItem>
              <DropdownItem><TypeFilterLink filter={TypeFilters.SHOW_ALL}>Show All</TypeFilterLink></DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </React.Fragment>)
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, null)(Filters);
