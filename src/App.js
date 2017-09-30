import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './react-router-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    );
  }
}

export default App;
