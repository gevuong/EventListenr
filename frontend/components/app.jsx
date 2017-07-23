import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import EventForm  from './event/event_form';
import EventShow from './event/event_show';
import UserProfile from './user/profile';
import Home from './home/home';

const App = () => (
  <div>
    <header className="header-container">
      <NavBarContainer />
    </header>

    <Switch>
      <Route path="/events/new" component={ EventForm } />
      <Route path="/events/eventId" component={ EventShow } />
      <Route path="/users/userId" component={ UserProfile } />
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route path="/" component={ Home } />
    </Switch>
  </div>
);

// const App = () => (
//   <div>
//     <h1>App: Welcome</h1>
//   </div>
// );

export default App;
