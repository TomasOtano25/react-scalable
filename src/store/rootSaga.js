import {
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga
} from "../containers/home/sagas";
import linkListSagas from "../containers/linkList/sagas";

const sagas = [
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga,
  linkListSagas
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
