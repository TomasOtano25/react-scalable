//import { delay } from "redux-saga";
import types from "../../actions/actionType";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { requestTopicsSucceded, requestTopicsFailed } from "./actions";
import { logException } from "../../tracking/configureSentry";

const fetchTopicsFromServer = () =>
  new Promise((resolve, reject) => {
    return axios
      .get("http://5adab961ba92a2001425c92e.mockapi.io/api/v1/topics")
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

export function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceded(topics));
  } catch (error) {
    logException(error.message, error);
    yield put(requestTopicsFailed(error.message));
  }
}

export function* mySaga() {
  yield takeLatest(types.REQUEST_TOPICS, fetchTopics);
}

/*export function* mySaga() {
  yield takeLatest(types.REQUEST_TOPICS, () => {
    console.log("LOGGED BY SAGA!!");
  });
}*/

//export default [mySaga];
