import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  AsyncPageHome,
  AsyncPageOther
} from './AsyncComponents';

const AppRoutes = () =>
    <Switch>
      <Route exact path='/' component={AsyncPageHome} />
      <Route path='/other' component={AsyncPageOther} />
    </Switch>;

export default AppRoutes;
