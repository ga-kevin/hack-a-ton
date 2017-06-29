import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import TileViewContainer from './containers/TileViewContainer'

import { createStore } from 'redux'
const reducer = require('./redux/modules/reducer').default;
let store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TileViewContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
