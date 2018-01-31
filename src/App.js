import React, { Component } from 'react';
// import './App.css';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TabList />
      </div>
    );
  }
}

export default App;
