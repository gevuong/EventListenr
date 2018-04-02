// Libs
import React, { Component } from 'react';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';

// Components
import NavbarContainer from '../navbar/navbar_container';
import UpcomingEvents from './upcoming_events';
import BookmarkedEvents from './bookmarked_events';
import OrganizedEvents from './organized_events';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("profile componentDidMount render props: ", this.props);
    this.props.requestAllEvents();
  }

  render() {
    console.log('profile render props: ', this.props);
    let bookmarkedEvents, ticketedEvents;
    let { events, currentUser, organizedEvents, bookmarks, tickets } = this.props;

    // prevents "Uncaught TypeError: Cannot convert undefined or null to object"
    if (tickets === undefined) {
        tickets = [];
    }
    console.log('profile render currentUser: ', currentUser);
    console.log('profile render bookmarks: ', bookmarks);
    console.log('profile render tickets: ', tickets);

    if (currentUser) {
        bookmarkedEvents = bookmarks.map((id) => {
            return events[id];
        });
        ticketedEvents = Object.keys(tickets).map((id) => {
            return events[id];
        });
    } else {
        bookmarkedEvents = [];
        ticketedEvents = [];
    }

    console.log("profile render organizedEvents1: ", organizedEvents);
    console.log("profile render ticketedEvents: ", ticketedEvents);
    console.log("profile render bookmarkedEvents: ", bookmarkedEvents);
    return(
      <div>
        <header>
          <NavbarContainer />
        </header>

        <div className='user-profile-container'>
          <h1>{currentUser ? currentUser.username : ""}</h1>
          <ul>
            <NavLink to="/profile/ticketed">
              <li>
                <h3>{ticketedEvents.length}</h3>
                <h3>Upcoming Events</h3>
              </li>
            </NavLink>
            <NavLink to="/profile/bookmarked">
              <li>
                <h3>{bookmarkedEvents.length}</h3>
                <h3>Saved Events</h3>
              </li>
            </NavLink>
            <NavLink to="/profile/organized">
              <li>
                <h3>{organizedEvents.length}</h3>
                <h3>Organized Events</h3>
              </li>
            </NavLink>
          </ul>
        </div>

        <Route exact path={'/profile'}
          render={ () => <Redirect to={'/profile/ticketed'} /> }
        />
        <Route path={'/profile/ticketed'}
          render={ () => <UpcomingEvents ticketedEvents={ticketedEvents} /> }
        />
        <Route path={'/profile/bookmarked'}
          render={ () => <BookmarkedEvents bookmarkedEvents={bookmarkedEvents} /> }
        />
        <Route path={'/profile/organized'}
          render={ () => <OrganizedEvents
          organizedEvents={organizedEvents} /> }
        />
      </div>
    );
  }
}

export default UserProfile;
