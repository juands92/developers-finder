import { getUserData, getRepos } from '../utils/api/github-api';
import { GET_GH_PROFILE, LOADING_PROFILE, GET_REPOS, GET_ORGS, UPDATE_USER, GET_ERRORS } from './types';


//Get repositories
export const getRepositories = (userName) => dispatch => {
    dispatch(setLoading());
    getRepos(userName)
        .then(res =>
            dispatch({
                type: GET_REPOS,
                payload: res.data
            })
        ).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

//Get profile
export const getProfile = (userName) => dispatch => {
    dispatch(setLoading());
    getUserData(userName)
        .then(res =>
            dispatch({
                type: GET_GH_PROFILE,
                payload: res.user
            })
        ).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

//Get organizations
export const getOrganizations = (userName) => dispatch => {
    dispatch(setLoading());
    getUserData(userName)
        .then(res =>
            dispatch({
                type: GET_ORGS,
                payload: res.orgs
            })
        ).catch(err => dispatch({
            type: GET_ORGS,
            payload: []
        }));
}


export const updateUserName = userName => ({
    type: UPDATE_USER, 
    payload: userName
});


export const setLoading = () => {
    return {
        type: LOADING_PROFILE
    }
}