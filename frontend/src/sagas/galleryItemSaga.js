import request from '../requests'
import { call, put, takeLatest, fork} from 'redux-saga/effects';
import {
    GET_GALLERY_ITEMS,
    getGalleryItemsFailureAction,
    getGalleryItemsSuccessAction,
} from "../actions";

export function* watchGetGalleryItems() {
    yield takeLatest(GET_GALLERY_ITEMS, callGetGalleryItems);
}

function* callGetGalleryItems() {
    try {
        const response = yield call(request.getGalleryItems);
        yield put(getGalleryItemsSuccessAction(response.data.galleryItems));
    } catch(error) {
        yield put(getGalleryItemsFailureAction(error));
    }
}

export default function* galleryItemSaga() {
    yield (fork(watchGetGalleryItems))
}