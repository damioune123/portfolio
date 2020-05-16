import { all, call } from 'redux-saga/effects';
import { watchGetHomes } from './homeSaga';
import { watchGetRealtors } from './realtorSaga';

export default function* rootSaga() {
    yield all([
        call(watchGetHomes),
        call(watchGetRealtors),
    ]);
}