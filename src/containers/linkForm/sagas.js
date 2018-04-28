import types from "../../actions/actionType";
import { put, takeLatest } from "redux-saga/effects";
import { goBack } from "react-router-redux";

function* cancelAdd() {
  yield put(goBack());
}

export function* cancelAddSaga() {
  yield takeLatest(types.CANCEL_ADD, cancelAdd);
}

export default [cancelAddSaga];
