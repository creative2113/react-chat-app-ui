import {combineReducers} from 'redux';

import userReducer from './userReducer';
import {routerReducer } from 'react-router-redux';

const reducers=combineReducers({
    routing: routerReducer,
    userReducer
});

export default reducers;