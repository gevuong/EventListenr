import EventIndex from './event_index';
import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';

const mapStateToProps = ({ event, session }) => ({
  events: selectAllEvents(event.events),
  currentUser: session.currentUser || { bookmarks: [] },
});

const mapDispatchToProps = dispatch => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
