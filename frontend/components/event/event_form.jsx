// Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import DropForm from './drop_form';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../home/footer';

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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearEventErrors();
    // this.props.requestEvent(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearEventErrors();
      // if (!nextProps.event && nextProps.event.id) {
      //   this.props.requestEvent(nextProps.event.id);
      // }
    }
  }
//
  handleSubmit(e) {
    console.log("handleSubmit1");
    e.preventDefault();
    const event = Object.assign({}, this.state);
    // this.props.createEvent(event).then(() => this.props.history.push(`/events/${this.props.event.event.id}`))
    this.props.createEvent(event).then(() => this.props.history.push("/"))
    .fail(() => setTimeout(() => window.scrollTo(0,0), 500)); // if fail, scrolls to top of page
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

  renderEventErrors() {
    if (this.props.eventErrors === undefined) {
      // this.props.eventErrors = [];
      return (
        <div>
      </div>
    );
    } else {
      return (
        <div className="event-errors-container">
          {this.props.eventErrors.map((error, idx) => (
            <li className="event-error-li" key={idx}>
              { error }
            </li>
            ))
          }
        </div>
      );
    }
  }

  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity } = this.state;

    // convert Date object to string to create DateTime input restriction, HTML5 feature for input tag, type="datetime-local"
    let dateTime = JSON.stringify(new Date()).split(".")[0].slice(1,-3);

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
              { this.renderEventErrors() }
              <label className="event-field-label">
                EVENT TITLE
                <span className="asterisk"> *</span>
              </label>
                <input
                  className="event-input"
                  type="text"
                  value={ title }
                  onChange={this.update('title')}
                  placeholder='Give a short distinct name'
                />

            <br />
              <label className="event-field-label">
                LOCATION
                <span className="asterisk"> *</span>
              </label>
              <input
                className="event-input"
                type="text"
                value={ location }
                onChange={this.update('location')}
                placeholder='Specify where it is held'
              />
              <br/>

              <label className="event-field-label">
                Date and Time
                <span className="asterisk"> *</span>
              </label>
              <input
                className="event-input"
                type="datetime-local"
                value={ date_time }
                min={ dateTime }
                onChange={this.update('date_time')}
              />
              <br/>

              <label className="event-field-label">
                Event Image
                <span className="asterisk"> *</span>
              </label>
              <DropForm className="image-upload-form" updateUrl={this.updatePicUrl} />
              <br />

              <label className="event-field-label">
                EVENT DESCRIPTION
                <span className="asterisk"> *</span>
              </label>

              <textarea
                className="event-input-description"
                type="text"
                value={ description }
                onChange={this.update('description')}
              />
              <br/>

              <div className="eventDetailsDiv">
                <span className="number">2</span>
                <span className="eventDetails">Create Tickets</span>
              </div>
              <div className="ticketDetailsDiv">
                <div className="ticketTitleDiv">
                  <span className='quantity'>Quantity Available</span>
                  <span className="asterisk">  *</span>
                  <span className='price'>Price</span>
                  <span className="asterisk">  *</span>
                </div>
                <div className='ticketsDiv'>
                  <input
                    className="event-input-quantity"
                    type="text"
                    placeholder="100"
                    value={ ticket_quantity }
                    onChange={this.update('ticket_quantity')}
                    />
                  <input
                    className="event-input-price"
                    type="text"
                    placeholder="$0"
                    value={ ticket_price }
                    onChange={this.update('ticket_price')}
                    ></input>
                </div>
              </div>
              <br />
            </form>

            <div className='eventLiveDiv'>
              <button className="make-event-live-button" onClick={this.handleSubmit}>MAKE YOUR EVENT LIVE</button>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
