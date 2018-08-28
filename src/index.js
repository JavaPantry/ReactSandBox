import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import History from 'history';

import './index.css';
import App from './App';
import PartsView from './components/partsView';
import registerServiceWorker from './registerServiceWorker';
//<App/>

const RootView = () => (
  <Router>
  <App>
    <Route path="/home" component={PartsView} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </App>
  </Router>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

ReactDOM.render(<RootView />, document.getElementById('root'));
registerServiceWorker();
