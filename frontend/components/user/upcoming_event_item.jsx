import React, { Component } from 'react';

class UpcomingEventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('upcoming-event-item: ', this.props.eventItem);
    const { eventItem } = this.props
    return(
      <div>
        <ul>
          <li>{eventItem.title}</li>
        </ul>
      </div>
    )
  }
}

export default UpcomingEventItem;
