// Admin page, which is for profs
import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from './withAuthorization';
const ProfPage = (props, { authUser }) =>
  <div>
    <h1>Professors only</h1>
    <p>Restricted area! Only users with the professor rule are authorized.</p>
  </div>

ProfPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => authUser.role === 'Professor';

export default withAuthorization(authCondition)(ProfPage);