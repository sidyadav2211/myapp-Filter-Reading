import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Show from './Components/Show'
import Create from './Components/Create.js'
import Edit from './Components/Edit'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path='/' component={App} />
    <Route path='/create' component={Create} />
    <Route path="/show/:id" component={Show} />
    <Route path='/edit/:id' component={Edit} />

  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();

