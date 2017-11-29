import React, { Component } from 'react';

class UpcomingEventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('upcoming-event-item: ', this.props);

    const { ticketedEvents } = this.props;
    let date;
    let time;
    let dateTime;
    ticketedEvents.forEach(event => {
      date = new Date(event.date_time).toDateString();
      time = new Date(event.date_time).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });
      dateTime = date + ' - ' + time;
    })

    return(
      <ul className="ticketed-event-container">
        { ticketedEvents.map(event => (
          <li>
            <div className="upcoming-eventItem-container">
              <div>
                <img className="upcoming-eventItem-img" src={ event.image_url } />
                </div>
                <div className="upcoming-eventItem-info">
                  <p>{ dateTime.toUpperCase() }</p>
                  <h4>{ event.title }</h4>
                  <p>{ event.location }</p>
                </div>
              </div>
          </li>
          ))
        }
      </ul>
    )
  }
}

export default UpcomingEventItem;
