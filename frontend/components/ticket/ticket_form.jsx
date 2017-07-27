import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-modal';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      modalIsOpen: true
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    this.props.requestEvent(this.props.match.params.eventId);
    console.log(this.props);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push(`/events/${this.props.match.params.eventId}/tickets/new`);
  }

  checkout(e) {
    e.preventDefault();
    let eventId = this.props.match.params.eventId;
    let obj1 = {ticket: [eventId]};
    Object.assign({}, this.state, obj1);
    // createEvent(state)
    this.props.history.push(`/events/${this.props.match.params.eventId}`);
  }

  render() {
    console.log('ticketform', this.props);

    return (
      <div>
        <Link to={`/events/${event.id}/tickets/new`}>
          <h3 className="tickets-button">TICKETS</h3>
        </Link>

        <Modal className="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <div className="ticket-container">
            <form>
              <h4>Register</h4>
              <h3>Ticket Page</h3>
              <button onClick={this.checkout}>CHECKOUT</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TicketForm);
