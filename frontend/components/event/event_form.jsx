import React, { Component } from 'react';
import DropForm from './drop_form';
import NavbarContainer from '../navbar/navbar_container';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      location: "",
      date_time: "",
      image_url: "",
      ticket_price: "",
      ticket_quantity: "",
      category_id: [1],
    };

    this.updatePicUrl = this.updatePicUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

    return (
      <div>
        <header>
          <NavbarContainer />
        </header>
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
              <label className="event-field-label">EVENT TITLE<span className="asterisk"> *</span></label>
                <input
                  className="event-input"
                  type="text"
                  value={title}
                  onChange={this.update('title')}
                  placeholder='Give a short distinct name'
                />

            <br />
              <label className="event-field-label">LOCATION<span className="asterisk"> *</span></label>
                  <input
                    className="event-input"
                    type="text"
                    value={location}
                    onChange={this.update('location')}
                    placeholder='Specify where it is held'
                  />
              <br/>

              <label className="event-field-label">Date and Time<span className="asterisk"> *</span></label>
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

              <label className="event-field-label">EVENT DESCRIPTION<span className="asterisk"> *</span></label>

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
              <div className="ticketDetailsDiv">
                <div className="ticketTitleDiv">
                    <span className='quantity'>Quantity Available </span><span className="asterisk">  *</span>
                    <span className='price'>Price </span><span className="asterisk">  *</span>
                </div>
                <div className='ticketsDiv'>
                  <input
                    className="event-input-quantity"
                    type="text"
                    placeholder="100"
                    value={ticket_quantity}
                    onChange={this.update('ticket_quantity')}
                    />
                  <input
                    className="event-input-price"
                    type="text"
                    placeholder="$0"
                    value={ticket_price}
                    onChange={this.update('ticket_price')}
                    ></input>
                </div>
              </div>
              <br />
            </form>
            <div className='eventLiveDiv'>
              <button className="tickets-button" onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
            </div>
          </div>
          <div className="bottomDivider"></div>
          <footer className='footerContainer'>
            <div className="links">
              <div className="github-linkedin">
                <a href="https://github.com/gevuong"><i className="fa fa-github fa-3x"></i></a>
              </div>
              <div className="github-linkedin">
                <a href="https://www.linkedin.com/in/george-vuong/"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
              </div>
            </div>
            <div>
              <p className="footer-copyright">2017 EventListenr</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default EventForm;
//
// <label className="event-field-label">Price</label>
//   <input
//     className="event-input"
//     type="number"
//     value={ticket_price}
//     onChange={this.update('ticket_price')}
//   />
// <br/>
// <label className="event-field-label">Quantity available</label>
//   <input
//     className="event-input"
//     type="number"
//     value={ticket_quantity}
//     onChange={this.update('ticket_quantity')}
//   />
// </div>
