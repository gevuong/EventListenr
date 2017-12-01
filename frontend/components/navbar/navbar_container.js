import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ event, session }) => ({
  currentUser: session.currentUser,
  bookmarkedEvents: session.currentUser.bookmarks.map((id) => {
    return event.events[id] || {description: ""};
  }),
  ticketedEvents: Object.keys(session.currentUser.tickets).map((id) => {
    return event.events[id] || {description: ""};
  })
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
