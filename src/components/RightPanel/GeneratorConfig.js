import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  UncontrolledDropdown
} from "reactstrap";
import {
  ClearEntries,
  SetSimulationRate,
  ToggleModalEdit,
  ToggleSimulation
} from "../../actions";
import { compose, lifecycle, withState } from "recompose";
import { connect } from "react-redux";
import Icon from "react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const GeneratorConfig = ({
  collapse,
  toggleModalEdit,
  currentTime,
  setRate,
  running,
  toggleSim,
  rate,
  clearEntries
}) => (
  <Col lg={collapse ? 12 : 6} style={{ padding: "5px" }}>
    <Card
      style={{ height: "100%", backgroundColor: "#333", borderColor: "#333" }}
      inverse
    >
      <CardHeader
        className=" text-center text-white"
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder"
        }}
      >
        <Icon name="cog" /> Simulation
      </CardHeader>
      <CardBody>
        <Form style={{ padding: "10px", width: "100%" }}>
          <FormGroup row>
            <Label lg={collapse ? 12 : 2}>Time</Label>
            <Col lg={collapse ? 12 : 4}>
              <Input readonly type="text" name="select" value={currentTime} />
            </Col>
          </FormGroup>
          <Row>
            <Col lg={collapse ? 6 : 4}>
              <FormGroup row>
                <Label lg={collapse ? 12 : 6}>Running</Label>
                <Col lg={collapse ? 12 : 6}>
                  <Button onClick={toggleSim}>
                    <Icon name={running ? "pause" : "play"} size="3x" />
                  </Button>
                </Col>
              </FormGroup>
            </Col>
            <Col lg={collapse ? 6 : 6}>
              <FormGroup row>
                <Label lg={collapse ? 12 : 4}>Rate</Label>
                {!collapse && (
                  <Col lg={collapse ? 12 : 8}>
                    <ButtonGroup>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(1)}
                      >
                        1x
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(2)}
                      >
                        2x
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(5)}
                      >
                        5x
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(10)}
                      >
                        10x
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(20)}
                      >
                        20x
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setRate(50)}
                      >
                        50x
                      </Button>
                    </ButtonGroup>
                  </Col>
                )}
                {collapse && (
                  <Col lg={8}>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        outline
                        color="primary"
                        style={{ width: "63px", height: "62px" }}
                      >
                        {rate} x
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => setRate(1)}>
                          1x
                        </DropdownItem>
                        <DropdownItem onClick={() => setRate(2)}>
                          2x
                        </DropdownItem>
                        <DropdownItem onClick={() => setRate(5)}>
                          5x
                        </DropdownItem>
                        <DropdownItem onClick={() => setRate(10)}>
                          10x
                        </DropdownItem>
                        <DropdownItem onClick={() => setRate(20)}>
                          20x
                        </DropdownItem>
                        <DropdownItem onClick={() => setRate(50)}>
                          50x
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup row>
            {!collapse && (
              <React.Fragment>
                <Label lg={collapse ? 12 : 2}>Bulk</Label>
                <Col lg={collapse ? 6 : 6}>
                  <ButtonGroup>
                    <Button outline color="primary" onClick={toggleModalEdit}>
                      50
                    </Button>
                    <Button outline color="primary" onClick={toggleModalEdit}>
                      500
                    </Button>
                    <Button outline color="primary" onClick={toggleModalEdit}>
                      5000
                    </Button>
                  </ButtonGroup>
                </Col>
              </React.Fragment>
            )}
            {collapse && (
              <Col lg={6}>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    outline
                    color="primary"
                    style={{ width: "63px", height: "62px" }}
                  >
                    Bulk
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>50</DropdownItem>
                    <DropdownItem>500</DropdownItem>
                    <DropdownItem>5000</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            )}

            <Col lg={collapse ? 6 : 4}>
              <Button
                style={{
                  width: collapse ? "63px" : "",
                  height: collapse ? "62px" : ""
                }}
                outline
                color="warning"
                onClick={clearEntries}
              >
                Clear
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  </Col>
);

GeneratorConfig.propTypes = {
  collapse: PropTypes.bool,
  toggleModalEdit: PropTypes.func.isRequired,
  currentTime: PropTypes.func.isRequired,
  setRate: PropTypes.func.isRequired,
  running: PropTypes.bool,
  toggleSim: PropTypes.func.isRequired,
  rate: PropTypes.number,
  clearEntries: PropTypes.func.isRequired
};

GeneratorConfig.defaultProps = {
  collapse: false
};

const enhancer = compose(
  withState("currentTime", "setTime", null),
  lifecycle({
    componentDidMount() {
      this.interval = setTimeout(
        () => this.props.setTime(Date.now(true)),
        1000
      );
    },

    componentWillUpdate() {
      window.clearTimeout(this.interval);
      this.interval = setTimeout(
        () => this.props.setTime(Date.now(true)),
        1000
      );
    },
    componentWillUnmount() {
      window.clearTimeout(this.interval);
    }
  }),
  connect(
    state => ({
      modalEdit: state.ui.useModalEdit,
      running: state.simulation.running,
      rate: state.simulation.rate
    }),
    {
      toggleModalEdit: ToggleModalEdit,
      setRate: SetSimulationRate,
      toggleSim: ToggleSimulation,
      clearEntries: ClearEntries
    }
  )
);
export default enhancer(GeneratorConfig);
