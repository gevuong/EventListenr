import React from 'react';
import Carousel from '../carousel';
import EventIndexContainer from '../event/event_index_container';
import NavBarContainer from '../navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SimpleSlider from './slide_show';

const Home = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <SimpleSlider />
    <EventIndexContainer />
  </div>
);

export default Home;
