// Libs
import React, { Component } from 'react';

// Components
// import BookmarkedEventItem from './bookmarked_event_item';
import EventIndexItem from '../event/event_index_item';

const BookmarkedEvents = ({ bookmarkedEvents }) => {
  console.log("bookmarkedEvents: ", bookmarkedEvents);

  if (bookmarkedEvents.length === 0) {
    return (
      <div>
        Saved events will show up here so you can easily view them here later.
      </div>
    )
  }
  else {
    let bookmarkedEvent = bookmarkedEvents.map(event => (
      <EventIndexItem eventItem={event} key={event.id} />
    ));

    return (
      <div className="event-index-container" id="bookmarkedEvents-container">
        { bookmarkedEvent }
      </div>
    );
  }
};

export default BookmarkedEvents;
