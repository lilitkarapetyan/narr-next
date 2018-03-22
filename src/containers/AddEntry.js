import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import {ButtonToolbar, Button} from 'react-bootstrap'

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
                <ButtonToolbar>
                <Button type="submit">
                    Add Entry A
                </Button>
                <Button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'CO Comment', 'sensitive'));
                }}>
                    Add Entry B
                </Button>
                <Button onClick={e => {
                    e.preventDefault();
                    dispatch(addEntry('lorem ipsum', 'Weather', 'private'));
                }}>
                    Add Entry C
                </Button>
                <Button onClick={e => {
                    e.preventDefault();
                    for(var i=0;i<100;i++) {
                        dispatch(addEntry('lorem ipsum ' + i, 'New  contact', 'public'));
                    }
                }}>
                    Add Bulk D
                </Button>
                </ButtonToolbar>
            </form>
        </div>
    )
};
AddEntry = connect()(AddEntry);

export default AddEntry