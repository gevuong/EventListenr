import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      location: "",
      date_time: "",
      ticket_price: 0,
      ticket_quantity: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

// invoked immediately after a component is mounted
  // componentDidMount() {
  //   this.props.createEvent();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event);
  }

  update(events) {
    return e => this.setState({
      [events]: e.target.value
    });
  }

  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity } = this.state;
    console.log("render test");

    return (
      <div className="event-form-container">
        <h3>Create an Event</h3>

        <form className="event-form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            className="create-event-title"
            type="text"
            value={title}
            onChange={this.update('title')}
          />

          <label>Description</label>
          <input
            className="create-event-description"
            type="text"
            value={description}
            onChange={this.update('description')}
          />

          <label>Location</label>
            <input
              className="create-event-location"
              type="text"
              value={location}
              onChange={this.update('location')}
            />

          <label>Date and Time</label>
            <input
              className="create-event-location"
              type="text"
              value={location}
              onChange={this.update('location')}
            />

          <label>Ticket Price</label>
            <input
              className="ticket-price"
              type="number"
              value={ticket_price}
              onChange={this.update('ticket_price')}
            />

          <label>Ticket Quantity</label>
            <input
              className="ticket-quantity"
              type="number"
              value={ticket_quantity}
              onChange={this.update('ticket_quantity')}
            />
        </form>
      </div>
    );
  }
}

export default EventForm;
