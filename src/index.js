import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entryApp from './reducers/reducers';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(entryApp, composeWithDevTools());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
