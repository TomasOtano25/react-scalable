import types from "../../actions/actionType";
import { put, takeLatest, call } from "redux-saga/effects";
import { goBack } from "react-router-redux";
import { createLink } from "../../api";
import { logException } from "../../tracking/configureSentry";

function* handleAdd() {
  yield put(goBack());
}

function* addLink(action) {
  try {
    const link = yield call(createLink, action.link);
    //    yield put()
    //console.log(link);
    yield put(goBack());
  } catch (error) {
    logException(error.message, error);
  }
}

export function* cancelAddSaga() {
  yield takeLatest(types.CANCEL_ADD, handleAdd);
}

export function* addLinkSaga() {
  yield takeLatest(types.ADD_LINK, addLink);
}

export default [cancelAddSaga, addLinkSaga];
