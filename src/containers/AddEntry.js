import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions';

let AddEntry = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addEntry(input.value, 'type-a'));
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Entry A
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'type-b'));
                }}>
                    Add Entry B
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'type-c'));
                }}>
                    Add Entry C
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'type-d'));
                }}>
                    Add Bulk D
                </button>
            </form>
        </div>
    )
};
AddEntry = connect()(AddEntry);

export default AddEntry