import React from 'react';

import EventIndexItem from '../event/event_index_item';
import UpcomingEventItem from './upcoming_event_item';

const OrganizedEvents = ({ organizedEvents }) => {
  // console.log("organizedEvents: ", organizedEvents);

  if (organizedEvents.length === 0) {
    return (
      <div className="no-saved-events-container" id="bookmarkedEvents-container">
        <img id="no-organized-events-img" src="https://res.cloudinary.com/dtluc0y85/image/upload/v1522652013/no_events_tokf11.png" alt="no saved events" />

        <div className="text-container">
          <p className="no-saved-events-text">
            You do not have any organized events. Hosted events will show up here so you can easily view them here later.
          </p>
        </div>
      </div>
    )
  } else {
    let organizedEvent = organizedEvents.map(event => (
      <UpcomingEventItem eventItem={ event } key={ event.id } />
    ))

    return (
      <ul className="organized-event-container">
        { organizedEvent }
      </ul>
    );
  }
}

export default OrganizedEvents;
