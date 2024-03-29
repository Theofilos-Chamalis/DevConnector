import {CLEAR_CURRENT_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_LOADING} from '../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

export default function profileReducer (state = initialState, action) {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
}
