import React from 'react';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('EventIndexItem', this.props);
    const { eventItem } = this.props;

    return (
      <div>
        <ul>
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
