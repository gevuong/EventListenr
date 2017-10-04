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
    let currentUser = this.props.currentUser;
    console.log('event: ', event);
    console.log('event_date: ', event.date_time);
    console.log('currentUser: ', currentUser);
    return (
      <div className="event-show-container-outer">
        <TicketFormContainer modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} event={event}/>
        <br />
        <div className="event-show-container">
          <div>
            <img className="show-page-image" src={event.image_url} />
          </div>

          <div className="show-page-event-details">
            <h3 className='eventTitleShow'>{event.title}</h3>
            <div className="event-authorDiv">
              by {currentUser.username}
            </div>
            <div className="ticket-priceDiv">
              ${event.ticket_price}
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="bookmark-register-container">
          <BookmarkContainer event={event}/>
          <h3 className="register-button" onClick={this.openModal}>REGISTER</h3>
        </div>
        <div className="event-show-moreDetails">
          <div className="description-show-page">
            <h4 className="event-show-headers">DESCRIPTION</h4>
            <p className="description-paragraph">{event.description}</p>
          </div>

          <div className="eventDateTimeLocation">
            <h4 className="event-show-headers">DATE AND TIME</h4>
              <p className="date-location">{event.date_time}</p>
            <h4 className="event-show-headers">LOCATION</h4>
              <p className="date-location">{event.location}</p>
          </div>
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
