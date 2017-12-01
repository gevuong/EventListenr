// Libraries
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
    this.props.requestAllEvents();
  }

  render() {
    // console.log('userprofile_props: ', this.props);
    const { currentUser, currentUser: { organized_events }, ticketedEvents, bookmarkedEvents } = this.props;
    // console.log("currentUser: ", currentUser);

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
                <h3>{organized_events.length}</h3>
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
          organizedEvents={organized_events} /> }
        />
      </div>
    );
  }
}

export default UserProfile;
