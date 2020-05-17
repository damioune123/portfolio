import {
    GET_HOMES,
    GET_HOMES_SUCCESS,
    GET_HOMES_FAILURE
} from "../actions";

import { initialState } from '../constants/initialState';

export default function contactReducer(
    state = initialState.get('homes'),
    action
) {
    switch (action.type) {
        case GET_HOMES:
            return state.merge({
                loading: true,
                homes: null,
                error: null
            });
        case GET_HOMES_SUCCESS:
            return state.merge({
                loading: false,
                homes: action.payload.homes,
                error:null
            });
        case GET_HOMES_FAILURE:
            return state.merge({
                loading: false,
                error: action.payload.error,
                homes: null
            });
        default:
            return state;
    }
}
