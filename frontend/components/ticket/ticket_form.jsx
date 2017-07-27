import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-modal';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_id: props.event.id,
      user_id: props.session.id,
      quantity: 0,
      modalIsOpen: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: parseInt(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTicket(this.state)
    .then(() => {
      this.props.closeModal()
      this.props.history.push(`/events/${this.props.match.params.eventId}`)
      }
    );
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

  render() {
    console.log('ticketform', this.props);
    const { quantity } = this.state;
    const { event } = this.props;

    return (
      <div>
        <Modal className="modal-ticket-form"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <div className="ticket-container">
            <form onSubmit={this.handleSubmit}>
              <h4>Register for Event</h4>
              <br />
              <p>Quantity</p>
              <select onChange={this.handleChange}>
                <option disabled selected>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>

              <footer className="ticket-footer">
                <label>QTY: { quantity }</label>
                <label>TOTAL: ${ event.ticket_price * quantity }</label>
                <button className="tickets-button" onClick={this.handleSubmit}>CHECKOUT</button>

              </footer>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TicketForm);
