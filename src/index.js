import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import { render } from "react-dom";
import App from "./components/App";
import entryApp from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";

import { persistentStore } from "redux-pouchdb-plus";
import PouchDB from "pouchdb";

const db = new PouchDB("naar-next");

/* eslint-disable no-underscore-dangle */

const middleware = compose(
  persistentStore({ db }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */

const store = createStore(entryApp, middleware);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
