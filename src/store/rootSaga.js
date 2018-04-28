import {
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga
} from "../containers/home/sagas";
import { fetchLinksSaga, startAddSaga } from "../containers/linkList/sagas";
import { doLoginSaga, cancelSaga } from "../containers/login/sagas";

const sagas = [
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga,
  fetchLinksSaga,
  startAddSaga,
  doLoginSaga,
  cancelSaga
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
