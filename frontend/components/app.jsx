import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';

const App = () => (
  <div>
    <header className="header-container">
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
    </Switch>


  </div>
);

// const App = () => (
//   <div>
//     <h1>App: Welcome</h1>
//   </div>
// );

export default App;
