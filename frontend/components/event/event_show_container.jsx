import { connect } from 'react-redux';
import { requestEvent } from '../actions/event_actions';
import  EventShow from './event_show';
import { selectAllEvents } from '../reducers/selectors';

const mapStateToProps = ({ events }) => ({
  events: selectAllEvents(events)
});

const mapDispatchToProps = dispatch => ({
  requestEvent: (id) => dispatch(requestEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
