import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore/configureReduxStore';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider store={reduxStore()}>
        <Router>
          <div>
            Hello world!
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
