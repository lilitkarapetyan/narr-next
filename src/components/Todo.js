import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id, created, type, privacy}) => (
    <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text} {id} {created.getSeconds()} {type} {privacy}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    privacy: PropTypes.string.isRequired
};

export default Todo