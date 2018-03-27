import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Badge } from 'reactstrap';

const colors = {
  public: 'success',
  sensitive: 'info',
}

const Entry = ({ onClick, selected, text, id, created, m_type, privacy}) => (
    <ListGroupItem onClick={onClick} color={selected ? 'success' : null}>
      {text} {id} {created.toLocaleTimeString()} {m_type} <Badge color={colors[privacy]}>{privacy}</Badge>
    </ListGroupItem>
);

Entry.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created: PropTypes.object.isRequired,
    m_type: PropTypes.string.isRequired,
    privacy: PropTypes.string.isRequired
};

export default Entry;
