// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
// Components
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // // we don't put the store directly on the window because
  // // it can be confusing when debugging, sometimes giving you access to state when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

// To test api util functions in console.
// window.login = APIUtil.login;
// window.signup = APIUtil.signup;
// window.logout = APIUtil.logout;
// signup({user: { username: "george", password: "password"}})
