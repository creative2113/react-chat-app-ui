import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import MatchesUserList from './components/MatchesUserList';
import ChatUser from './components/ChatUser';

class App extends Component {
  render() {
    return (
      <ChatUser/>
    );
  }
}

export default App;
