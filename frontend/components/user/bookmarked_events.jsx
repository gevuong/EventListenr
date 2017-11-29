// Libraries
import React, { Component } from 'react';

// Components
import BookmarkedEventItem from './bookmarked_event_item';

const BookmarkedEvents = ({ bookmarkedEvents }) => {
  console.log("bookmarkedEvents: ", bookmarkedEvents);
  return (
    <div>
      { bookmarkedEvents.map(event => (
          <BookmarkedEventItem eventItem={event} key={event.id} />
        ))
      }
    </div>
  );
};

export default BookmarkedEvents;
