import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = ({ event, session }, ownProps) => ({
  event: event.events[ownProps.match.params.eventId] || {},
  currentUser: session.currentUser || {bookmarks: []}
});

const mapDispatchToProps = dispatch => ({
  requestEvent: id => dispatch(requestEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
