import types from "../../actions/actionType";
import { takeLatest, put } from "redux-saga/effects";
import { goBack } from "react-router-redux";

function* handleDone() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield takeLatest(types.LOGIN, handleDone);
}

export function* cancelSaga() {
  yield takeLatest(types.CANCEL_LOGIN, handleDone);
}

export default [doLoginSaga, cancelSaga];
