import React, { Component } from 'react';
import EventIndexItem from '../event/event_index_item';
import NavbarContainer from '../navbar/navbar_container';

class UserProfile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    return(
      <div>
        <header>
          <NavbarContainer />
        </header>
        <div className='user-profile-container'>
            <h3 className="ticketed-event-header">Purchased Tickets</h3>
          <div className='ticketed-event-container'>
            {this.props.ticketedEvents.map(event => (
              <EventIndexItem key={event.id} eventItem={event}/>
              ))
            }
          </div>
          <br/>

            <h3 className="ticketed-event-header">Bookmarked Events</h3>
            <div className="bookmark-event-container">
              {this.props.bookmarkedEvents.map(event => (<EventIndexItem key={event.id} eventItem={event}/>
                ))
              }
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
