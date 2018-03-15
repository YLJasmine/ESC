import React from 'react';
import { Link } from 'react-router-dom';
import withAuthorization from './withAuthorization';
import * as routes from '../constants/routes';


const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <Link to={routes.PROF}>Professor only</Link>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
