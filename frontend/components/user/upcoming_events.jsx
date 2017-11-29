import React from 'react';
import UpcomingEventItem from './upcoming_event_item';

const UpcomingEvents = ({ ticketedEvents }) => {
  return (
    <ul className="ticketed-event-container">
      { ticketedEvents.map(event => (
          <UpcomingEventItem eventItem={event} key={event.id} />
        ))
      }
    </ul>
  )
}

export default UpcomingEvents;
