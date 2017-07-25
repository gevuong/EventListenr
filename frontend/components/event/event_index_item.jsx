import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;
    let eventDescription = eventItem.description.slice(0,60) + "...";

    return (
    <div>
      <div className="event-container">
        <Link to={`/events/${eventItem.id}`}>
          <img src={eventItem.image_url}></img>
        </Link>

        <p>{eventItem.title}</p>
        <p>Location: {eventItem.location}</p>
        <p>Description: {eventDescription}</p>
        <p>Date and Time: {eventItem.date_time}</p>
      </div>
    </div>
    );
  }
}

export default EventIndexItem;
