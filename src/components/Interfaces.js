import React from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';

import AddEntry from '../containers/AddEntry';

const Interfaces = () => (
  <div>
    <Row>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Common</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Cat 1</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Cat 2</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Cat 3</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Cat 4</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} md={6} className={css(styles.mb2)}>
        <Card>
          <CardHeader>Cat 5</CardHeader>
          <CardBody>
            <AddEntry/>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

const styles = StyleSheet.create({
  mb2: {
    overflowY: 'auto',
    marginBottom: '20px'
  }
});

export default Interfaces;
