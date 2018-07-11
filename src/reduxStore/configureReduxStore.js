import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';

export default function configureReduxStore(){
    return createStore(reducers, applyMiddleware(reduxThunk));
}

