import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/style.scss';
import Home from './components/Home';
import ShotPage from './components/ShotPage';

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shot/:id" component={ShotPage} />
    </Switch>
  </Router>,
  document.getElementById('app'))