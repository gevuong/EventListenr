import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import BookmarkContainer from '../bookmark/bookmark_container';
class EventIndexItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;

    let date = new Date(eventItem.date_time).toDateString();
    let dateParsed = date.slice(0, date.length - 5);
    let time = new Date(eventItem.date_time).toLocaleTimeString('en-US', {hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });
    let dateTime = dateParsed + ', ' + time;

    let ticketPrice;
    if (eventItem.ticket_price === 0) {
      ticketPrice = 'FREE';
    } else if (eventItem.ticket_price === undefined){
      ticketPrice = '';
    } else {
      ticketPrice = '$' + eventItem.ticket_price.toString();
    }

    let eventDescription = eventItem.description.slice(0,60) + "...";
    return (
      <div className='event-index-wrapper'>
        <Link to={`/events/${eventItem.id}`}>
          <div className="event-container">
            <div className="event-container-hover"></div>
              <img src={ eventItem.image_url }></img>
              <span className="event-price-span">{ ticketPrice }</span>
              <div className="eventIndex-detailsDiv">
                <p className='datetime-p'>{ dateTime }</p>
                <h4 className='event-title'>{ eventItem.title }</h4>
                <p className='event-index-location'>{ eventItem.location }</p>
              </div>
            <br/>
            <div className="eventBookmarkDiv">
              {/*<BookmarkContainer event={ eventItem }/>*/}

            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventIndexItem;
//
// <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
