import React, { Component } from 'react';

class UpcomingEventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('upcoming-event-item: ', this.props.eventItem);

    let date = new Date(event.date_time).toDateString();
    let time = new Date(event.date_time).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });
    let dateTime = date + ', ' + time;

    const { eventItem } = this.props

    return(
      <div className="upcoming-eventItem-container">
        <div>
          <img className="upcoming-eventItem-img" src={ eventItem.image_url } />
        </div>
        <div className="upcoming-eventItem-info">
          <p>{ dateTime }</p>
          <h4>{ eventItem.title }</h4>
          <p>{ eventItem.location }</p>
        </div>
      </div>
    )
  }
}

export default UpcomingEventItem;
