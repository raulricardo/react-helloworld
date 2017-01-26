import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Content />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <ul className="list">
        <h3 className="list__title">list title</h3>
        <li className="list__item">
          list item
        </li>
        <li className="list__item">
          list item
        </li>
        <li className="list__item">
          list item
        </li>
      </ul>
    )
  }
}

export default App;
