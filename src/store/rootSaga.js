import { mySaga } from "../containers/home/sagas";
import linkListSagas from "../containers/linkList/sagas";

const sagas = [mySaga, linkListSagas];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
