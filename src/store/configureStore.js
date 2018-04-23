import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

export const sagasMiddleware = createSagaMiddleware();

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagasMiddleware))
  );

  initSagas(sagasMiddleware);

  return store;
};

export default configureStore;
