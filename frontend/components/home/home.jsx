import React from 'react';
import Carousel from '../carousel';
import EventIndex from '../event/event_index';
import NavBarContainer from '../navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
      <Carousel />
      <EventIndex />
  </div>
);

export default Home;
