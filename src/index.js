import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    <Route path="/part/:partId" component={PartDetail} />
    <Route path="/topics" component={Topics} />
  </App>
  </Router>
);


const PartDetail = () => (
    <div>

        <div>
            <h2>Part Detail</h2>
            <input type="text" placeholder="your email" className="form-control"></input>
            <textarea type="text" placeholder="your message" className="form-control"></textarea>
            <button className="btn btn-primary">Save</button>
        </div>

        <Link to="/home">Back to list</Link>
    </div>
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
