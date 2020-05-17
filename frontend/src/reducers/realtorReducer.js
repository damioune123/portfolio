import {
    GET_REALTORS,
    GET_REALTORS_SUCCESS,
    GET_REALTORS_FAILURE
} from "../actions";

const initialState = {
    realtors: null,
    loading: false,
    error: null
};

export default function contactReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case GET_REALTORS:
            return {
                ...state,
                loading: true,
                homes: null,
                error: null
            };
        case GET_REALTORS_SUCCESS:
            return {
                ...state,
                loading: false,
                realtors: action.payload.realtors
            };

        case GET_REALTORS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                homes: null
            };

        default:
            return state;
    }
}
