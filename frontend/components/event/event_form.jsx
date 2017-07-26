import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import DropForm from './drop_form';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      location: "",
      date_time: "",
      image_url: "",
      ticket_price: 0,
      ticket_quantity: 0,
      category_id: [1],
      organizer_id: [1]
    };
    this.updatePicUrl = this.updatePicUrl.bind(this);
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

  updatePicUrl(url) {
    this.setState({
      image_url: url
    });
  }

  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity } = this.state;

    return (
      <div className="event-form-container">
        <h3>EVENT DETAILS</h3>

        <form className="event-form" onSubmit={this.handleSubmit}>
          <label className="event-field-label">TITLE</label>
            <input
              className="event-input"
              type="text"
              value={title}
              onChange={this.update('title')}
            />

        <br />
        <label className="event-field-label">DESCRIPTION</label>
          <input
            className="event-input"
            type="text"
            value={description}
            onChange={this.update('description')}
          />
        <br/>

        <label className="event-field-label">LOCATION</label>
            <input
              className="event-input"
              type="text"
              value={location}
              onChange={this.update('location')}
            />

          <br/>
          <label className="event-field-label">Date and Time</label>
            <input
              className="event-input"
              type="datetime-local"
              value={date_time}
              onChange={this.update('date_time')}
            />
          <br/>

          <label className="event-field-label">Event Image</label>
          <DropForm className="image-upload-form" updateUrl={this.updatePicUrl} />

          <br />
          <label className="event-field-label">Ticket Price</label>
            <input
              className="event-input"
              type="number"
              value={ticket_price}
              onChange={this.update('ticket_price')}
            />
          <br/>
          <label className="event-field-label">Ticket Quantity</label>
            <input
              className="event-input"
              type="number"
              value={ticket_quantity}
              onChange={this.update('ticket_quantity')}
            />

          <br />
          <button className="tickets-button" onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
