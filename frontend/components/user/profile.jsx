import React from 'react';
import EventIndexItem from '../event/event_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    return(

      <div className = 'user-profile-container'>
        <div>
          <h3>Your Ticketed Events</h3>
          {Object.keys(this.props.currentUser.tickets).map((id) => (
            <EventIndexItem eventItem={this.props.events[id]}/>
            ))
          }
        <br/>
          <p>Your Bookmarked Events</p>
          {Object.keys(this.props.currentUser.bookmarks).map((id) => ( <EventIndexItem eventItem={this.props.events[id]}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default UserProfile;
