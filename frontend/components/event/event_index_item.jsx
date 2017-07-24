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
      <div className="event-index-container">
        <ul>
          <div className="event-container">
            <Link to={`/events/${eventItem.id}`}>SHOW EVENT</Link>
            <li>
              <img src="http://res.cloudinary.com/dtluc0y85/image/upload/v1500534760/homepage_photo_khrkqr.jpg"/>
            </li>
            <li>Title: {eventItem.title}</li>
            <li>Location: {eventItem.location}</li>
            <li>Description: {eventDescription}</li>
            <li>Date and Time: {eventItem.date_time}</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default EventIndexItem;
