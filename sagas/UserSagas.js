import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_DATA_REQUEST, getDataSuccess} from '../actions/UserActions';
import {getUser} from '../api/Api';

export function* watchGetUser() {
  yield takeLatest(GET_DATA_REQUEST, handleGetUser);
}

function* handleGetUser(action) {
  const response = yield call(getUser, action.payload);
    yield put(getDataSuccess(response));
}