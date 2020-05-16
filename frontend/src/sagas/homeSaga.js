import request from '../requests'
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_HOMES,
    getHomesFailureAction,
    getHomesSuccessAction,
} from "../actions/homeActions";

export function* watchGetHomes() {
    yield takeLatest(GET_HOMES, callGetHomes);
}

function* callGetHomes() {
    try {
        const response = yield call(request.getHomes);
        yield put(getHomesSuccessAction(response.data.homes));
    } catch(error) {
        yield put(getHomesFailureAction(error));
    }
}

