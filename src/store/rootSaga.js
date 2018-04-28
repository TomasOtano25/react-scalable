import {
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga
} from "../containers/home/sagas";
import { fetchLinksSaga, startAddSaga } from "../containers/linkList/sagas";
import { doLoginSaga, cancelSaga } from "../containers/login/sagas";
import {
  addLinkCancelAddSaga,
  addLinkSaga
} from "../containers/linkForm/sagas";

const sagas = [
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga,
  fetchLinksSaga,
  startAddSaga,
  doLoginSaga,
  cancelSaga,
  addLinkCancelAddSaga,
  addLinkSaga
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
