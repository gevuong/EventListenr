// Libraries
import React, { Component } from 'react';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';

// Components
import EventIndexItem from '../event/event_index_item';
import NavbarContainer from '../navbar/navbar_container';
import UpcomingEventItem from './upcoming_event_item';
import BookmarkedEventItem from './bookmarked_event_item';
import HostedEventItem from './hosted_event_item';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    console.log('userprofile: ', this.props.ticketedEvents);

    const { currentUser, ticketedEvents, bookmarkedEvents } = this.props;

    return(
      <div>
        <header>
          <NavbarContainer />
        </header>
        <div className='user-profile-container'>
          <h1>{currentUser.username}</h1>
          <ul>
            <NavLink to="/profile/ticketed">
              <li>
                <h3>{ticketedEvents.length ? " " : ticketedEvents.length }</h3>
                <h3>Upcoming Events</h3>
              </li>
          </NavLink>
          <NavLink to="/profile/bookmarked">
            <li>
              <h3>{bookmarkedEvents.length ? " " : bookmarkedEvents.length }</h3>
              <h3>Saved Events</h3>
            </li>
          </NavLink>
          <NavLink to="/profile/hosted">
            <li>
              <h3>{" "}</h3>
              <h3>Hosted Events</h3>
            </li>
          </NavLink>
          </ul>
        </div>

        <ul className='ticketed-event-container'>
          {ticketedEvents.map(event => (
            <li>
              <UpcomingEventItem eventItem={event} key={event.id}/>
            </li>
            ))
          }
        </ul>

        <Route exact path={'/profile'}
          render={ () => <Redirect to={'/profile/ticketed'} event={ticketedEvents} /> }
        />
        <Route path={'/profile/bookmarked'}
          render={ () => <BookmarkedEventItem event={bookmarkedEvents} /> }
        />
        <Route path={'/profile/hosted'}
          render={ () => <HostedEventItem /> }
        />
      </div>
    );
  }
}

// <h3>Saved Events</h3>
// <div className="bookmark-event-container">
//   {bookmarkedEvents.map(event => (<EventIndexItem key={event.id} eventItem={event}/>
//     ))
//   }
// // {ticketedEvents.map(event => (
//   <EventIndexItem key={event.id} eventItem={event}/>
//   ))
// }
export default UserProfile;
