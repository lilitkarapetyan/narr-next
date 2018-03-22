import React from 'react';
import Footer from './Footer';
import VisibleEntryList from '../containers/VisibleEntryList';
import AddEntry from '../containers/AddEntry';

const App = () => (
    <div>
        <AddEntry />
        <Footer />
        <VisibleEntryList />
    </div>
);

export default App