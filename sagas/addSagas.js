import { ADD } from '../actions/actions';

import { takeEvery } from 'redux-saga/effects';


function* add() {
    
}

export function* watchAdd() {         
    yield takeEvery(ADD, add);
}
