import {
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga
} from "../containers/home/sagas";
import linkListSagas from "../containers/linkList/sagas";
import { doLoginSaga, cancelSaga } from "../containers/login/sagas";

const sagas = [
  fetchTopicsSaga,
  selectTopicsSaga,
  selectDefaultTopicSaga,
  linkListSagas,
  doLoginSaga,
  cancelSaga
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
