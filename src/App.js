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
{/*
        <header className="App-header">
          <h5 className="App-title">ReactJs Scaffolding Application</h5>
        </header>
*/}
        <div className="navbar navbar-default">

            <ul className="nav nav-pills navbar-nav ">
              <li><img src={logo} className="App-logo" alt="logo" /></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
        </div>

        <p className="App-intro">
          v #0.8
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
