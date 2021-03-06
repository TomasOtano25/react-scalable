import types from "../../actions/actionType";
import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  requestLinkSucceded,
  requestLinkFailed
} from "../../containers/linkList/actions";
import { logException } from "../../tracking/configureSentry";

const fetchLinksFromServer = topic => {
  return new Promise((resolve, reject) => {
    return axios
      .get(
        `http://5adab961ba92a2001425c92e.mockapi.io/api/v1/links?search=${
          topic.name
        }`
      )
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinkSucceded(links));
  } catch (error) {
    logException(error.message, error);
    yield put(requestLinkFailed(error.message));
  }
}

export default function*() {
  yield takeLatest(types.SELECT_TOPIC, fetchLinks);
}
