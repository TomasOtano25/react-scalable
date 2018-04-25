//import { delay } from "redux-saga";
import types from "../../actions/actionType";
import axios from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { requestTopicsSucceded, requestTopicsFailed } from "./actions";
import { logException } from "../../tracking/configureSentry";
import { push } from "react-router-redux";

const fetchTopicsFromServer = () =>
  new Promise((resolve, reject) => {
    return axios
      .get("http://5adab961ba92a2001425c92e.mockapi.io/api/v1/topics")
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceded(topics));
  } catch (error) {
    logException(error.message, error);
    yield put(requestTopicsFailed(error.message));
  }
}

function* pushTopic(action) {
  //yield sessionStorage.setItem("selectedTopic", action.topic.name);
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  let redirectRoute;
  const state = yield select();
  console.log(state);

  /*if (sessionStorage.getItem("selectedTopic") !== null) {
    redirectRoute = sessionStorage.getItem("selectedTopic");
  } else {*/
  redirectRoute = state.topics[0].name;
  //}

  if (Object.keys(state.selected).length === 0) {
    yield put(push(`/topics/${redirectRoute}`));
  }
}

export function* fetchTopicsSaga() {
  yield takeLatest(types.REQUEST_TOPICS, fetchTopics);
}

export function* selectTopicsSaga() {
  yield takeLatest(types.SELECT_TOPIC, pushTopic);
}

export function* selectDefaultTopicSaga() {
  yield takeLatest(types.REQUEST_TOPICS_SUCCEDED, selectDefaultTopic);
}

export default [fetchTopicsSaga, selectTopicsSaga, selectDefaultTopicSaga];

/*export function* mySaga() {
  yield takeLatest(types.REQUEST_TOPICS, () => {
    console.log("LOGGED BY SAGA!!");
  });
}*/

//export default [mySaga];
