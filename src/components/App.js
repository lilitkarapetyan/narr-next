import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleEntryList';
import AddTodo from '../containers/AddEntry';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App