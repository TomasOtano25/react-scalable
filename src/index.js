import "babel-polyfill";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";

import Raven from "raven-js";
import { sentry_url } from "./tracking/configureSentry";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
//import { loadTopics } from "./containers/home/action";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Raven.config(sentry_url).install();

const store = configureStore();

//console.log(window.doesNotExist.nope);
//store.dispatch(loadTopics());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
