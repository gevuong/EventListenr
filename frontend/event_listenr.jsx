// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

// Components
import configureStore from './store/store';
import Root from './components/root';
import * as EventAPIUtil from './util/event_api_util';
import { requestAllEvents, requestEvent } from './actions/event_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUser: window.currentUser,
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
  // // we don't put the store directly on the window because
  // // it can be confusing when debugging, sometimes giving you access to state when you shouldn't
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  // window.requestAllEvents = requestAllEvents;
  // window.requestEvent = requestEvent;

  // To test api util functions in console.
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});


// signup({user: { username: "george", password: "password"}})
