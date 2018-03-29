import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Filters from './Filters';
import VisibleEntryList from '../containers/VisibleEntryList';
import Interfaces from './Interfaces';

const App = () => (
  <div className={css(styles.body)}>
    <div className={css(styles.layout)}>
      <div className={css(styles.actions)}>
        <Interfaces />
      </div>
      <div className={css(styles.entryList)}>
        <div className={css(styles.filters)}>
          <Filters />
        </div>
        <div className={css(styles.entries)}>
          <VisibleEntryList />
        </div>
      </div>
    </div>
  </div>
);

const sizes = {
  entryList: {
    desktop: 460,
    tablet: 340,
    mobile: '100%'
  },
  filtersSpace: 386,
};

const styles = StyleSheet.create({
  body: {
    height: '100vh',
    padding: '20px',
    boxSizing: "border-box",
    overflowY: 'auto',
  },
  layout: {
    width: '100%',
    height: '100%',
    paddingLeft: sizes.entryList.desktop + 20,
    position: 'relative',
    "@media (max-width: 1024px)": {
      paddingLeft: sizes.entryList.tablet + 20,
    },
    "@media (max-width: 720px)": {
      paddingLeft: 0
    }
  },
  actions: {
    height: '100%',
    "@media (max-width: 720px)": {
      height: 'auto',
      marginBottom: '20px',
    }
  },
  entryList: {
    position: 'absolute',
    width: sizes.entryList.desktop,
    left: 0,
    top: 0,
    height: '100%',
    boxSizing: "border-box",
    paddingTop: sizes.filtersSpace,
    "@media (max-width: 1024px)": {
      width: sizes.entryList.tablet,
    },
    "@media (max-width: 720px)": {
      height: 'auto',
      paddingTop: 0,
      position: 'static',
      width: sizes.entryList.mobile,
    }
  },
  filters: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    "@media (max-width: 720px)": {
      position: 'static',
      marginBottom: '20px',
    }
  },
  entries: {
    height: '100%',
    minHeight: '320px',
    "@media (max-width: 720px)": {
      minHeight: '0',
    }
  }
});

export default App;
