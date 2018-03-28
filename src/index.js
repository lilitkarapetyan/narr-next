import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-virtualized/styles.css";
import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";
import App from "./components/App";
import entryApp from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  entryApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
