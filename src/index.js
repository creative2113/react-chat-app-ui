import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureReduxStore from './configureReduxStore';
import { BrowserRouter as Router} from "react-router-dom";

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(BrowserRouter , configureReduxStore);


ReactDOM.render(
    <Provider store={configureReduxStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
