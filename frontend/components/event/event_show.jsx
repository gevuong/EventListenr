import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import TicketForm from '../ticket/ticket_form';

class EventShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }

  // componentWillReceiveProps() {
  //   if (!event) {
  //     event = {};
  //   }
  // }

  // a render occurs when
  //1. a component is instantiated
  //2. when the state changes
  //3. when setState is called

  render() {
    // let event = this.props.events[this.props.match.params.eventId];
    let key = this.props.match.params.eventId;
    let event = this.props.event[key] ? this.props.event[key] : {};

    return (
      <div className="event-show-container-outer">
        <br />
        <div className="event-show-container">
          <h3>
            <img className="show-page-image" src={event.image_url} />
          </h3>

          <div className="show-page-event-details">
            <h3>{event.title}</h3>
            <h4>Location</h4>
              <p>{event.location}</p>
            <br />
            <h4>Date and Time</h4>
            <p>{event.date_time}</p>
            <br />
            <br />
            <p>${event.ticket_price}</p>
            <br />
            <p>Quantity: {event.ticket_quantity}</p>
            <br />
            <Link to={`/events/${event.id}/tickets/new`}>
              <h3 className="tickets-button">TICKETS</h3>
            </Link>


            <br />
            <br />
          </div>
        </div>

        <div className="description-show-page">
          <h4>Description</h4>
          <p>{event.description}</p>
        </div>
      </div>
      );
    }
}

// <Route path="/events/:eventId/tickets/new" component={ TicketForm } />

export default EventShow;
// console.log('match', this.props.match.params.eventId);
// console.log('events', this.props.events);
// console.log('event', event);
// if (!event) {
//   event = {};
//   console.log("triggers?");
// }
