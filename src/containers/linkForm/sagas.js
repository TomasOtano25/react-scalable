import types from "../../actions/actionType";
import { put, takeLatest, call } from "redux-saga/effects";
import { goBack } from "react-router-redux";
import { createLink } from "../../api";
import { addLinkSuccess, addLinkFailed } from "./actions";
import { logException } from "../../tracking/configureSentry";

function* handleAdd() {
  yield put(goBack());
}

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    //console.log(link);
    yield put(goBack());
  } catch (error) {
    logException(error.message, error);
    yield put(addLinkFailed(action.link, error.message));
  }
}

export function* addLinkCancelAddSaga() {
  yield takeLatest(types.ADD_LINK_CANCELLED, handleAdd);
}

export function* addLinkSaga() {
  yield takeLatest(types.ADD_LINK, addLink);
}

export default [addLinkCancelAddSaga, addLinkSaga];
