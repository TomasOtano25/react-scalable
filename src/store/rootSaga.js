import { fetchTopicsSaga, selectTopicsSaga } from "../containers/home/sagas";
import linkListSagas from "../containers/linkList/sagas";

const sagas = [fetchTopicsSaga, selectTopicsSaga, linkListSagas];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
