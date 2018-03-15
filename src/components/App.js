import React from 'react';
import {  BrowserRouter as Router,
          Route,
        } from 'react-router-dom';
// allows user to navigate to diff routes using react router.
import Navigation from './Navigation';

// importing the routes so that the content changes
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import AccountPage from './Account';
import ProfPage from './Professor';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.PROF} component={() => <ProfPage />} />
      </div>
  </Router>

export default withAuthentication(App);
