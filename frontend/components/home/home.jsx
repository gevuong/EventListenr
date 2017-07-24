import React from 'react';
import Carousel from '../carousel';
import EventIndexContainer from '../event/event_index_container';
import NavBarContainer from '../navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
      <Carousel />
      <EventIndexContainer />
  </div>
);

export default Home;
