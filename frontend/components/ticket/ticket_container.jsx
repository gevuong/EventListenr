import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import TicketForm from '../ticket/ticket_form';

const mapStateToProps = ({ event }) => ({
  event: event
});

const mapDispatchToProps = dispatch => ({
  requestEvent: id => dispatch(requestEvent(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
