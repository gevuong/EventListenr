import { connect } from 'react-redux';
import { createEvent, deleteEvent, clearEventErrors } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = ({ event }) => ({
  event, // equivalent to event: event
  eventErrors: event.errors,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  deleteEvent: event => dispatch(deleteEvent(event)),
  clearEventErrors: () => dispatch(clearEventErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
