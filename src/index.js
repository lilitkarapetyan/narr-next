import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-virtualized/styles.css";
import React from "react";
/* eslint-disable-next-line */

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { render } from "react-dom";
import App from "./components/App";
import ReduxThunk from "redux-thunk";
import entryApp from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";
/* eslint-disable no-underscore-dangle */
import { persistentStore } from "redux-pouchdb-plus";
import PouchDB from "pouchdb";

const db = new PouchDB("naar_next");

const store = createStore(
  entryApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(ReduxThunk), persistentStore({ db }))
);
/* eslint-enable */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
// console.log(Simulation);
