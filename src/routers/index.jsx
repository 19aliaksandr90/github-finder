import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import App from '../modules/App';
import UsersPage from '../pages/UsersPage';
import AboutPage from '../pages/AboutPage';

const AppRouters = () => (
  <BrowserRouter>
    <LastLocationProvider>
      <Switch>
        <App>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/about" component={AboutPage} />
        </App>
      </Switch>
    </LastLocationProvider>
  </BrowserRouter>
);

export default AppRouters;
