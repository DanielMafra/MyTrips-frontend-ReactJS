import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reserves from './pages/Reserves';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/reserves" component={Reserves} />
    </Switch>
  );
}