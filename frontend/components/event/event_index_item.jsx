import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;
    let date = new Date(eventItem.date_time).toDateString();
    let time = new Date(eventItem.date_time).toTimeString().slice(0, 8);
    console.log('parsedDate: ', eventItem);
    let eventDescription = eventItem.description.slice(0,60) + "...";
    return (
      <div className='event-index-wrapper'>
        <Link to={`/events/${eventItem.id}`}>
          <div className="event-container">
            <div className="event-container-hover"></div>
              <img src={eventItem.image_url}></img>
              <div className="eventIndex-detailsDiv">
                <p className='datetime-p'>{ date + ' ' + time }</p>
                <h4 className='event-title'>{eventItem.title }</h4>
                <p className='event-index-location'>{eventItem.location}</p>
              </div>
            <br/>
            <div className="eventBookmarkDiv">
              <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventIndexItem;
