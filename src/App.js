import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoUseHover } from './components/DemoUseHover'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DemoUseHover />
      </div>
    );
  }
}

export default App;
