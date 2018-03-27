import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, ListGroup, Alert } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';

import Entry from './Entry'

const EntryList = ({ entries, onEntryClick }) => (
  <Card className={css(styles.main)}>
    <CardBody>
      <ListGroup className={css(styles.entries)}>
        {entries.map((entry, index) => (
          <Entry key={index} {...entry} onClick={() => onEntryClick(index)} />
        ))}
        {!entries.length && <Alert color="secondary">No entries</Alert>}
      </ListGroup>
    </CardBody>
  </Card>
);

EntryList.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            selected: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            created: PropTypes.object.isRequired,
            m_type: PropTypes.string.isRequired,
            privacy: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onEntryClick: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    overflowY: 'auto',
    backgroundColor: '#fafafa'
  },
  entries: {
    cursor: 'pointer'
  }
});

export default EntryList
