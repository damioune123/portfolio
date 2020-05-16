import request from '../requests'
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_REALTORS,
    getRealtorsFailureAction,
    getRealtorsSuccessAction,
} from "../actions/realtorActions";

export function* watchGetRealtors() {
    yield takeLatest(GET_REALTORS, callGetRealtors);
}

function* callGetRealtors() {
    try {
        const response = yield call(request.getRealtors);
        yield put(getRealtorsSuccessAction(response.data.realtors));
    } catch(error) {
        yield put(getRealtorsFailureAction(error));
    }
}

