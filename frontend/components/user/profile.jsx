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
          {Object.keys(this.props.currentUser.tickets).map((id) => (
            <EventIndexItem eventItem={this.props.events[id]}/>
          ))
          }

          <h3>User Profile</h3>
          <p>Bookmarks</p>
          <p>Tickets</p>
          <p>User Events</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
