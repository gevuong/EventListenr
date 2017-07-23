import React from 'react';
import { Link } from 'react-router-dom';

const EventIndex = () => (
  <div className="event-index-container">
    <div className="event-container">
      <p>Title</p>
      <p>Description</p>
      <p>Date</p>
      <p>Price <Link to="/events/eventId">Event Show Page</Link></p>

    </div>
    <div className="event-container">
      <p>Title2</p>
      <p>Description2</p>
      <p>Date2</p>
      <p>Price2</p>
    </div>
    <div className="event-container">
      <p>Title3</p>
      <p>Description3</p>
      <p>Date3</p>
      <p>Price3</p>
    </div>
  </div>
);

export default EventIndex;
