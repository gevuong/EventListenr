import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;
    let eventDescription = eventItem.description.slice(0,25) + "...";

    return (
    <div>
      <div className="event-container">
        <Link to={`/events/${eventItem.id}`}>SHOW EVENT</Link>
          <img src="http://res.cloudinary.com/dtluc0y85/image/upload/v1500534760/homepage_photo_khrkqr.jpg"/>
        <p>Title: {eventItem.title}</p>
        <p>Location: {eventItem.location}</p>
        <p>Description: {eventDescription}</p>
        <p>Date and Time: {eventItem.date_time}</p>
      </div>
    </div>
    );
  }
}

export default EventIndexItem;
