import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import PartsView from './components/partsView';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Alexei</h1>
        </header>
        <div className="navbar navbar-default">
            <ul className="nav nav-pills navbar-nav ">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
          </ul>
        </div>

        <p className="App-intro">
          v #0.21 Pull <code>PartsView</code> from App.js
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
