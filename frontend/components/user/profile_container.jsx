import UserProfile from './profile';
import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';

const mapStateToProps = ({ event, session }) => ({
    // console.log("profile_container, session: ", session)
  events: event.events,
  currentUser: session.currentUser,
  bookmarks: session.currentUser ? session.currentUser.bookmarks : [],
  tickets: session.currentUser ? session.currentUser.tickets : [],
  organizedEvents: session.currentUser ? session.currentUser.organized_events : [],

  // bookmarkedEvents: session.currentUser.bookmarks.map((id) => {
  //   return event.events[id] || {description: ""};
  // }),
  // ticketedEvents: Object.keys(session.currentUser.tickets).map((id) => {
  //   return event.events[id] || {description: ""};
  // }),
});

const mapDispatchToProps = dispatch => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
