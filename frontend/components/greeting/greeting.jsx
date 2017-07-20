import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';

const sessionLinks = () => (


    <nav id="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;&nbsp;
      <Link to="/signup">Sign up</Link>
    </nav>

);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h3 className="header-name">Hi, {currentUser.username}!</h3>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
