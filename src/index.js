import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import History from 'history';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//<App/>

const RootView = () => (
  <Router>
  <div>
    <div className="navbar navbar-default">
        <ul className="nav nav-pills navbar-nav ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={Home} />
      <Route path="/topics" component={About} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

ReactDOM.render(<RootView />, document.getElementById('root'));
registerServiceWorker();
