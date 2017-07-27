import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvent(this.props.match.params.eventId);
    console.log(this.props);
  }

  render() {
    console.log('ticketform', this.props);

    return (
      <div className="ticket-container">
        <h4>Register</h4>
        <h3>Ticket Page</h3>

      </div>
    );
  }
}

export default TicketForm;
