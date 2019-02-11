import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    errors: errorReducer,
    profile: profileReducer
});