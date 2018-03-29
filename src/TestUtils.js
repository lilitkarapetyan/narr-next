import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import reducers from "./reducers/reducers";

const store = () => createStore(reducers);
/* eslint-disable */
export const WrapStore = ({ children }) => (
  <Provider store={store()}>{children}</Provider>
);

/* eslint-enable */

export default {
  WrapStore
};
