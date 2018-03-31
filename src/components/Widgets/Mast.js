import { Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { listenEvent } from "../../reducers/Selectors";
import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const MastButton = styled(Button)`
  height: 100%;
  width: 100%;
`;

class Mast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mast: {
        Search: false,
        Radar: false,
        ESM: false
      }
    };
    this.toggleMast = this.toggleMast.bind(this);
  }

  toggleMast(e) {
    const { mast } = this.state;
    mast[e.target.id] = !mast[e.target.id];
    this.setState({ mast });
  }
  render() {
    return (
      <Row className="no-gutters" style={{ width: "100%", height: "100%" }}>
        {this.props.masts.map(mast => (
          <Col lg={4}>
            <MastButton
              id={mast.name}
              outline
              color="primary"
              onClick={e => {
                this.toggleMast(e);
                this.props.addEntry({
                  mType: this.state.mast[mast.name] ? "mast-up" : "mast-down",
                  fields: {
                    type: mast.name,
                    reason: "Manual Trigger"
                  },
                  category: "Underwater"
                });
              }}
            >
              <Icon
                id={mast.name}
                name={this.state.mast[mast.name] ? "arrow-up" : "arrow-down"}
                size="3x"
              />
              <br />
              {mast.name}
            </MastButton>
          </Col>
        ))}
      </Row>
    );
  }
}

Mast.propTypes = {
  masts: PropTypes.arrayOf.isRequired,
  addEntry: PropTypes.func.isRequired
};

export default connect((state, ownProps) => ({
  masts: ownProps.config.masts.map(mast => ({
    name: mast,
    status: listenEvent(entry => entry.fields.type === mast)(state) || {}
  }))
}))(Mast);
