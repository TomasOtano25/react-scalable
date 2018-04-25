import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

import { routerMiddleware } from "react-router-redux";

export const history = createHistory();

const middleware = routerMiddleware(history);

export const sagasMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(middleware, sagasMiddleware))
  );

  initSagas(sagasMiddleware);

  return store;
};

export default configureStore;
