import { fromJS } from 'immutable';

export const initialState = fromJS({
    metaData: {
        metaData: null,
        loading: false,
        error: null
    },
    homes: {
        homes: null,
        loading: false,
        error: null
    },
    galleryItems: {
        galleryItems: null,
        loading: false,
        error: null
    },
    realtors: {
        realtors: null,
        loading: false,
        error: null
    }
});
