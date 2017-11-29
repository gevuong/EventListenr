// Libs
import React from 'react';

// Components
import EventIndexContainer from '../event/event_index_container';
import NavbarContainer from '../navbar/navbar_container';
import SlideShow from './slide_show';
import Footer from './footer';

// Pure, stateless, presentational component that does not manage its own state or use lifecycle events.
const Home = () => (
  <div>
    <header>
      <NavbarContainer />

    </header>
    <SlideShow />
      <div className='splash-text-container'>
        <p className='splash-text'>Find your next experience</p>
      </div>
    <EventIndexContainer />

  </div>
);

export default Home;
