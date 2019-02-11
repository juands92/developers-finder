import { GET_GH_PROFILE, LOADING_PROFILE, GET_REPOS, GET_ORGS, UPDATE_USER } from '../actions/types';

const initialState = {
    userName: "",
    profile: {},
    orgs: [],
    repos: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_PROFILE:
            return {
                ...state,
                loading: true
            };
        case GET_GH_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        case GET_ORGS:
            return {
                ...state,
                orgs: action.payload,
                loading: false
            };
        case UPDATE_USER:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }
}