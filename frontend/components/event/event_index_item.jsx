import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;
    let eventDescription = eventItem.description.slice(0,60) + "...";
    return (
      <div className='event-index-wrapper'>
        <Link to={`/events/${eventItem.id}`}>
          <div className="event-container">
            <div className="event-container-hover"></div>
              <img src={eventItem.image_url}></img>
              <div className="eventIndex-detailsDiv">
                <h4 className='eventTitle'>{eventItem.title}</h4>
                <p className='eventIndexLocation'>{eventItem.location}</p>
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
