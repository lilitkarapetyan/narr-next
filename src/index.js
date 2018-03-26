import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";
import App from "./components/App";
import entryApp from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(entryApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
