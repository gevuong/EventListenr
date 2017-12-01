import React from 'react';

import EventIndexItem from '../event/event_index_item';
import UpcomingEventItem from './upcoming_event_item';
// import OrganizedEventItem from './organized_event_item';

const OrganizedEvents = ({ organizedEvents }) => {
  console.log("organizedEvents: ", organizedEvents);
  let organizedEvent = organizedEvents.map(event => (
    <UpcomingEventItem eventItem={ event } key={ event.id } />
  ))

  return (
    <ul className="organized-event-container">
      { organizedEvent }
    </ul>
  );
}

export default OrganizedEvents;
