import {
    GET_META_DATA,
    GET_META_DATA_SUCCESS,
    GET_META_DATA_FAILURE
} from "../actions";

const initialState = {
    metaData: null,
    loading: false,
    error: null
};

export default function contactReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case GET_META_DATA:
            return {
                ...state,
                loading: true,
                metaData: null,
                error: null
            };
        case GET_META_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                metaData: action.payload.metaData
            };

        case GET_META_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                metaData: null
            };

        default:
            return state;
    }
}