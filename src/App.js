import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { voteUp } from './redux/modules/idea';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to HACK A TON</h2>

          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
