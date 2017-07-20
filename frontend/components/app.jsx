import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header className="header-container">
      <div className="header-homepage">
        <h1>EventListenr</h1>
      </div>

      <GreetingContainer />
    </header>

    <Route path="/login" component={ SessionFormContainer } />
    <Route path="/signup" component={ SessionFormContainer } />
  </div>
);

// const App = () => (
//   <div>
//     <h1>App: Welcome</h1>
//   </div>
// );

export default App;
