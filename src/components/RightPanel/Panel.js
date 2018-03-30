import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { compose, mapProps, withState } from "recompose";
import PropTypes from "prop-types";
import React from "react";

const Panel = ({
  color,
  style,
  inverse,
  children,
  title,
  open,
  setOpen,
  ...rest
}) => (
  <Col {...rest} style={{ padding: "5px" }}>
    <Card inverse={inverse} style={style}>
      <CardHeader
        color={color}
        onDoubleClick={() => {
          setOpen(!open);
        }}
        className="bg-primary text-center text-white"
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder"
        }}
      >
        {title}
      </CardHeader>
      {open && (
        <CardBody>
          <Row
            className="justify-content-md-center "
            style={{ padding: "10px", width: "100%" }}
          >
            {children}
          </Row>
        </CardBody>
      )}
    </Card>
  </Col>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  collapse: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.any,
  inverse: PropTypes.bool,
  children: PropTypes.element,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

Panel.defaultProps = {
  collapse: false
};

const enhancer = compose(
  withState("openS", "setOpen", false),
  mapProps(props => ({
    ...props,
    open: (props.openS && props.open) || !props.open
  }))
);
export default enhancer(Panel);
