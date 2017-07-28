import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import TicketFormContainer from '../ticket/ticket_container';
import BookmarkContainer from '../bookmark/bookmark_container';

class EventShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
    let event = this.props.event;

    return (
      <div className="event-show-container-outer">
        <TicketFormContainer modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} event={event}/>
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
            <br />
            <p>${event.ticket_price}</p>
            <br />
            <p>Quantity: {event.ticket_quantity}</p>
            <br />

              <h3 className="tickets-button" onClick={this.openModal}>TICKETS</h3>
            <br />
            <br />
          </div>
        </div>

        <BookmarkContainer event={event}/>


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
