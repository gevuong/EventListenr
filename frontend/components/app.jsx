// Libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

// Components
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import EventFormContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';
import UserProfileContainer from './user/profile_container';
import HomePage from './home/home';
import Footer from './home/footer';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/events/new" component={ EventFormContainer } />
      <Route path="/events/:eventId" component={ EventShowContainer } />
      <ProtectedRoute path="/profile" component={ UserProfileContainer } />
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route path="/" component={ HomePage } />
    </Switch>
    <Footer />
  </div>
);

export default App;
