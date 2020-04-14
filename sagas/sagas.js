import {all} from 'redux-saga/effects';
import {watchGetUser} from '../sagas/UserSagas';
import { watchAdd } from './addSagas';

export default function* rootSaga() {
  yield all([watchGetUser(), watchAdd()]);
}