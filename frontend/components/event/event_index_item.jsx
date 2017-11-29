// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import BookmarkContainer from '../bookmark/bookmark_container';

class EventIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventItem, eventItem: { organizer } } = this.props;
    let date = new Date(eventItem.date_time).toDateString();
    let weekday = date.slice(0, 3);
    let month = date.slice(3, 7);
    let day = date.slice(8, 10);
    let dateParsed = date.slice(0, date.length - 5);
    let time = new Date(eventItem.date_time).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });
    let dateTime = dateParsed + ', ' + time;

    let ticketPrice;
    if (eventItem.ticket_price === 0) {
      ticketPrice = 'FREE';
    } else if (eventItem.ticket_price === undefined){
      ticketPrice = '';
    } else {
      ticketPrice = '$' + eventItem.ticket_price.toString();
    }

    return (
      <div>
        <Link to={`/events/${eventItem.id}`}>
          <div className="event-container">
            <img src={ eventItem.image_url }></img>
            <div className="eventIndex-detailsDiv">
              <div className="month-day">
                <p className="month">{month}</p>
                <p className="day">{day}</p>
                <p className="month weekday">{weekday}</p>
              </div>
              <div className="event-info-index">
                <h3 className='event-title'>{ eventItem.title }</h3>
                <p className='event-index-location'>{ eventItem.location }</p>
                <p className="event-index-location">{ ticketPrice === "FREE" ? `FREE • by ${organizer.username}` : `Starts at ${ticketPrice} • by ${organizer.username}` }</p>
              </div>
            </div>
            {/*<div className="eventBookmarkDiv">*/}
              {/*<BookmarkContainer event={ eventItem }/>*/}

            {/*</div>*/}
          </div>
        </Link>
      </div>
    );
  }
}

export default EventIndexItem;
//
// <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
// <p className='datetime-p'>{ dateTime }</p>
