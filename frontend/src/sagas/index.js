import { all, call } from 'redux-saga/effects';
import { watchGetHomes } from './homeSaga';
import { watchGetRealtors } from './realtorSaga';
import { watchGetMetaData } from './metaDataSaga';
import { watchGetGalleryItems } from './galleryItemSaga';

export default function* rootSaga() {
    yield all([
        call(watchGetHomes),
        call(watchGetRealtors),
        call(watchGetMetaData),
        call(watchGetGalleryItems),
    ]);
}