import {
    GET_GALLERY_ITEMS,
    GET_GALLERY_ITEMS_SUCCESS,
    GET_GALLERY_ITEMS_FAILURE
} from "../actions";

import { initialState } from '../constants/initialState';

export default function contactReducer(
    state = initialState.get('galleryItems'),
    action
) {
    switch (action.type) {
        case GET_GALLERY_ITEMS:
            return state.merge({
                loading: true,
                galleryItems: null,
                error: null
            });
        case GET_GALLERY_ITEMS_SUCCESS:
            return state.merge({
                loading: false,
                galleryItems: action.payload.galleryItems,
                error: null
            });
        case GET_GALLERY_ITEMS_FAILURE:
            return state.merge({
                loading: false,
                error: action.payload.error,
                galleryItems: null
            });
        default:
            return state;
    }
}
