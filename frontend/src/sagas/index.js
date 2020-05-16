import { all, call } from 'redux-saga/effects';
import { watchGetHomes } from './homeSaga';

export default function* rootSaga() {
    yield all([
        call(watchGetHomes)
    ]);
}