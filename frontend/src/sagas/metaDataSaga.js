import request from '../requests'
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_META_DATA,
    getMetaDataSuccessAction,
    getMetaDataFailureAction,
} from "../actions/metaDataAction";

export function* watchGetMetaData() {
    yield takeLatest(GET_META_DATA, callGetMetaData);
}

function* callGetMetaData() {
    try {
        const response = yield call(request.getMetaData);
        yield put(getMetaDataSuccessAction(response.data.metaData));
    } catch(error) {
        yield put(getMetaDataFailureAction(error));
    }
}

