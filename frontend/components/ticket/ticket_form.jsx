import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-modal';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: parseInt(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const { currentUser } = this.props;
    // if (currentUser.username === undefined) {
    //
    // }

    let ticket = Object.assign({}, this.state);
    console.log("ticket: ", ticket);
    ticket.event_id = this.props.event.id;
    console.log("checkout: ", this.props);
    this.props.createTicket(ticket)
    .then(() => {
      this.props.closeModal();
      })
    .catch(this.props.history.push("/login"));
  }

  // componentWillMount() {
  //   this.props.requestEvent(this.props.match.params.eventId);
  //   console.log("componentWillMount: ", this.props);
  // }

  render() {
    const { quantity } = this.state;
    const { event, dateTime } = this.props;

    let date;
    dateTime ? date = dateTime.split(",")[1] : date = " ";

    return (
      <div className="ticket-box">
        <Modal className="modal-ticket-form"
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          contentLabel="Example Modal"
        >
          <form className="ticket-form" onSubmit={this.handleSubmit}>
            <div className="ticket-header-container">
              <h4 className="ticket-modal-header">Register</h4>
            </div>
            <div className="sale-ends-header">
              <p>Sales end on {date}</p>
            </div>
            <div className="ticket-title-container">
              <div className="left-ticket-title-price">
                <h2 className="ticket-title">{event.title}</h2>
                <div>
                  <p>{ event.ticket_price === 0 ? "FREE" : `$${event.ticket_price}` }</p>
                </div>
              </div>

              <select className="ticket-quantity-selector" onChange={this.handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="filler-div"></div>

            <footer className="ticket-footer">
              <div className="quantity-cost-container">
                <p>QTY: { quantity }</p>

                <p>{ event.ticket_price === 0 ? "FREE" : `TOTAL: $${ parseInt(event.ticket_price) * quantity }` }</p>
              </div>
              <button className="tickets-button" onClick={this.handleSubmit}>CHECKOUT</button>

            </footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TicketForm);
