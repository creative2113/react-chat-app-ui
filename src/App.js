import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import MatchesUserList from './components/MatchesUserList';
import ChatUser from './components/ChatUser';
import { BrowserRouter as Router,Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={MatchesUserList} />
        <Route path="/chat" component={ChatUser} />
      </div>
    );
  }
}

export default App;
