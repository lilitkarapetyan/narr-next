import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import entryApp from "./reducers/reducers";

/* eslint-disable no-underscore-dangle */
const store = createStore(entryApp);

beforeAll(() => {});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
