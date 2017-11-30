import { connect } from 'react-redux';
import { createTicket } from '../../actions/ticket_actions';
import TicketForm from '../ticket/ticket_form';

const mapStateToProps = ({ event, session }, ownProps ) => ({
  currentUser: session.currentUser || {},
  // event: event.events[ownProps.match.params.eventId] || {},
});

const mapDispatchToProps = (dispatch) => ({
  createTicket: ticket => dispatch(createTicket(ticket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
