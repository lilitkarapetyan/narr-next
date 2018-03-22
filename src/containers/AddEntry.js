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
                    dispatch(addEntry(input.value, 'type-a', 'public'));
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
                    dispatch(addEntry('lorem ipsum', 'type-b', 'sensitive'));
                }}>
                    Add Entry B
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'type-c', 'private'));
                }}>
                    Add Entry C
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    for(var i=0;i<100;i++) {
                        dispatch(addEntry('lorem ipsum ' + i, 'type-d', 'public'));
                    }
                }}>
                    Add Bulk D
                </button>
            </form>
        </div>
    )
};
AddEntry = connect()(AddEntry);

export default AddEntry