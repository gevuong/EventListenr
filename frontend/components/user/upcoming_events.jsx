import React from 'react';
import UpcomingEventItem from './upcoming_event_item';

const UpcomingEvents = ({ ticketedEvents }) => {
    // console.log("ticketedEvents: ", ticketedEvents);

  if (ticketedEvents.length === 0) {
    return (
      <div className="no-saved-events-container" id="bookmarkedEvents-container">
        <img id="no-saved-events-img"  src="https://res.cloudinary.com/dtluc0y85/image/upload/v1512101134/calendar_iuzsmc.png" alt="no saved events" />

        <div className="text-container">
          <p className="no-saved-events-text">You do not have any upcoming events. Registered events will show up here so you can easily view them here later.</p>
        </div>
      </div>
    )
  } else {
    return (
      <ul className="ticketed-event-container">
        { ticketedEvents.map(event => (
          <UpcomingEventItem eventItem={event} key={event.id} />
        ))
      }
    </ul>
    )
  }
}

export default UpcomingEvents;
