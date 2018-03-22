import React from 'react';
import Footer from './Filters';
import VisibleEntryList from '../containers/VisibleEntryList';
import AddEntry from '../containers/AddEntry';
import {Well} from 'react-bootstrap'

const App = () => (
    <Well>
        <AddEntry />
        <Footer />
        <VisibleEntryList />
    </Well>
);

export default App