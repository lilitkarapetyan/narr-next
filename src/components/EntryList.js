import React from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'
import {Well} from 'react-bootstrap'

const EntryList = ({ entries, onEntryClick }) => (
    <Well>
    <ul>
        {entries.map((entry, index) => (
            <Entry key={index} {...entry} onClick={() => onEntryClick(index)} />
        ))}
    </ul>
    </Well>
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

export default EntryList