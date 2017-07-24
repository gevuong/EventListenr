import EventIndex from './event_index';
import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';

const mapStateToProps = ({ event }) => ({
  events: selectAllEvents(event.events)
});

const mapDispatchToProps = dispatch => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
