import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h4>Welcome to my shitty page...ugh</h4>, root);
});

// To test api util functions in console.
// window.login = APIUtil.login;
// window.signup = APIUtil.signup;
// window.logout = APIUtil.logout;
// signup({user: { username: "george", password: "password"}})
