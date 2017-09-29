import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import EventFormContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';
import UserProfileContainer from './user/profile_container';
import Home from './home/home';

const App = () => (
  <div>
    <header className="header-container">
      <NavBarContainer />
    </header>

    <Switch>
      <Route exact path="/events/new" component={ EventFormContainer } />
      <Route path="/events/:eventId" component={ EventShowContainer } />
      <Route path="/profile" component={ UserProfileContainer } />
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route path="/" component={ Home } />
    </Switch>
  </div>
);



export default App;
