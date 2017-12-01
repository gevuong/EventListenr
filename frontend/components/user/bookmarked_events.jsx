// Libs
import React, { Component } from 'react';

// Components
// import BookmarkedEventItem from './bookmarked_event_item';
import EventIndexItem from '../event/event_index_item';

const BookmarkedEvents = ({ bookmarkedEvents }) => {
  console.log("bookmarkedEvents: ", bookmarkedEvents);

  let bookmarkedEvent = bookmarkedEvents.map(event => (
    <EventIndexItem eventItem={event} key={event.id} />
  ));

  return (
    <div className="event-index-container" id="bookmarkedEvents-container">
      { bookmarkedEvent }
    </div>
  );
};

export default BookmarkedEvents;
