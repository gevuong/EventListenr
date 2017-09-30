import React from 'react';
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
//
  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity } = this.state;
    console.log(this.state);

    return (
      <div className="event-form-container">
        <div id="createEventDiv">
          <p className="createEventh3">Create An Event</p>
        </div>
        <div className="divider"></div>
        <div className="event-form-wrapper">
          <form className="event-form" onSubmit={this.handleSubmit}>
            <div className="eventDetailsDiv">
              <span className="number">1</span>
              <span className="eventDetails">Event Details</span>
            </div>
            <label className="event-field-label">EVENT TITLE</label>
              <input
                className="event-input"
                type="text"
                value={title}
                onChange={this.update('title')}
                placeholder='Give a short distinct name'
              />

          <br />
            <label className="event-field-label">LOCATION</label>
                <input
                  className="event-input"
                  type="text"
                  value={location}
                  onChange={this.update('location')}
                  placeholder='Specify where it is held'
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

            <label className="event-field-label">EVENT DESCRIPTION</label>

              <textarea
                className="event-input-description"
                type="text"
                value={description}
                onChange={this.update('description')}
              />
            <br/>

            <div className="eventDetailsDiv">
              <span className="number">2</span>
              <span className="eventDetails">Create Tickets</span>
            </div>
            <div className="ticketInputDiv">
            <label className="event-field-label">Price</label>
              <input
                className="event-input"
                type="number"
                value={ticket_price}
                onChange={this.update('ticket_price')}
              />
            <br/>
            <label className="event-field-label">Quantity available</label>
              <input
                className="event-input"
                type="number"
                value={ticket_quantity}
                onChange={this.update('ticket_quantity')}
              />
            </div>
            <br />
            <button className="tickets-button" onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EventForm;
