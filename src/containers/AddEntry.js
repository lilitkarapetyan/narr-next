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
                    dispatch(addEntry(input.value, 'OOW Comment', 'public'));
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
                    dispatch(addEntry('lorem ipsum', 'CO Comment', 'sensitive'));
                }}>
                    Add Entry B
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'Weather', 'private'));
                }}>
                    Add Entry C
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    for(var i=0;i<100;i++) {
                        dispatch(addEntry('lorem ipsum ' + i, 'New  contact', 'public'));
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