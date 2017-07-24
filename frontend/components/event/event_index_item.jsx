import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;

    return (
      <div>
        <ul>
          <Link to={`/events/${eventItem.id}`}>SHOW EVENT</Link>
          EventIndexItem
          <li>{eventItem.date_time}</li>
          <li>{eventItem.title}</li>
          <li>{eventItem.description}</li>
          <li>{eventItem.image_url}</li>
          <li>{eventItem.ticket_price}</li>
          <li>{eventItem.ticket_quantity}</li>
        </ul>
      </div>
    );
  }
}

export default EventIndexItem;
