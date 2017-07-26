import React from 'react';

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

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// invoked immediately after a component is mounted
  componentDidMount() {
    this.props.createEvent();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent();
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.
  }
  update(events) {
    return e => this.setState({
      [events]: e.target.value
    });
  }

  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity} = this.state;

    return (

      <div>
        <h3>Create an Event</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={this.update('title')} />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={this.update('description')}
        />

        <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={this.update('location')}
          />

        <label>Ticket Price</label>
          <input
            type="number"
            value={ticket_price}
            onChange={this.update('ticket_price')}
          />

        <label>Ticket Quantity</label>
          <input
            type="number"
            value={ticket_quantity}
            onChange={this.update('ticket_quantity')}
          />

        <div>
          <button
            onClick={this.handleCloudinary}
          />
        </div>
      </form>


      </div>
    );
  }
}

export default EventForm;
