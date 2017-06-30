// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './pages/App';
import Gallery from './pages/Gallery';
import Header from './components/Header';

const Routes = (props) => (
  <Router {...props}>
        <div>
            <Header/>
            <Route exact path="/" component={App} />
            <Route path="/gallery" component={Gallery} />
        </div>
  </Router>
);

export default Routes;