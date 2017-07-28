import UsersProfile from './profile';
import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';

const mapStateToProps = ({ event, session }) => ({
  events: event.events,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile);
