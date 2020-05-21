import request from '../requests'
import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
    GET_HOMES,
    getHomesFailureAction,
    getHomesSuccessAction,
} from "../actions";

function* watchGetHomes() {
    yield takeLatest(GET_HOMES, callGetHomes);
}

function* callGetHomes() {
    try {
        const response = yield call(request.getHomes);
        console.log(response);
        yield put(getHomesSuccessAction(response));
    } catch(error) {
        yield put(getHomesFailureAction(error));
    }
}

export default function* homeSaga() {
    yield (fork(watchGetHomes))
}
