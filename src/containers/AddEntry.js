import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import { ButtonToolbar, Button } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';


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
                  className="form-control"
                  placeholder="Entry A title"
                  ref={node => { input = node }}
                />
                <ButtonToolbar>
                  <Button className={css(styles.btnSpaces)}outline color="info" type="submit">
                      Add Entry A
                  </Button>
                  <Button className={css(styles.btnSpaces)}outline color="info" onClick={e => {
                      e.preventDefault();
                      dispatch(addEntry('lorem ipsum', 'CO Comment', 'sensitive'));
                  }}>
                      Add Entry B
                  </Button>
                  <Button className={css(styles.btnSpaces)}outline color="info" onClick={e => {
                      e.preventDefault();
                      dispatch(addEntry('lorem ipsum', 'Weather', 'private'));
                  }}>
                      Add Entry C
                  </Button>
                  <Button className={css(styles.btnSpaces)}outline color="info" onClick={e => {
                      e.preventDefault();
                      for(var i=0;i<50;i++) {
                          dispatch(addEntry('Lorem ipsum dolor sit amet, usu zril graece at, no elitr indoctum eos. Ne affert pericula qui. Te salutandi definitiones sit. Sed fuisset omnesque iudicabit id. In paulo facilisis iudicabit his ' + i, 'New  contact', 'public'));
                      }
                  }}>
                      Add 50
                  </Button>
                </ButtonToolbar>
            </form>
        </div>
    )
};

const styles = StyleSheet.create({
  btnSpaces: {
    margin: '15px 15px 0 0',
    ':last-child' : {
      marginRight: '0'
    }
  }
});

AddEntry = connect()(AddEntry);

export default AddEntry
