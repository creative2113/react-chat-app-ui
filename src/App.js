import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import MatchesUserList from './components/MatchesUserList';
import ChatUser from './components/ChatUser';
import NavHeader from './components/NavHeader';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore/configureReduxStore';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider store={reduxStore()}>
        <Router>
          <div>
            <NavHeader />
            <Route exact path="/" component={Home} />
            <Route path="/users" component={MatchesUserList} />
            <Route path="/chat" component={ChatUser} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
