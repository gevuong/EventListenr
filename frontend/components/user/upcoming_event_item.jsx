import React, { Component } from 'react';

class UpcomingEventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('upcoming-event-item: ', this.props);
    const { eventItem } = this.props;

    let date = new Date(eventItem.date_time).toLocaleTimeString('en-US', { weekday: "short", day: "numeric", year: "numeric", month: "long"});
    console.log("date: ", date);

    let time = new Date(eventItem.date_time).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });

    let dateTime = date.split(",").slice(0,3).join() + ' - ' + time;

    return (
      <li>
        <div className="upcoming-eventItem-container">
          <div>
            <img className="upcoming-eventItem-img" src={ eventItem.image_url } />
          </div>
          <div className="upcoming-eventItem-info">
            <p>{ dateTime.toUpperCase() }</p>
            <h4>{ eventItem.title }</h4>
            <p>{ eventItem.location }</p>
          </div>
        </div>
      </li>
    )
  }
}

export default UpcomingEventItem;
