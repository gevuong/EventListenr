import React, { Component } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import TicketFormContainer from '../ticket/ticket_container';
import BookmarkContainer from '../bookmark/bookmark_container';
import NavbarContainer from '../navbar/navbar_container';

class EventShow extends Component {
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
    console.log('event show: ', this.props);
    const { event, event: { organizer }, currentUser } = this.props;

    let date = new Date(event.date_time).toDateString();
    let weekday = date.slice(0, 3);
    let month = date.slice(3, 7);
    let day = date.slice(8, 10);

    let dateTime = new Date(event.date_time).toLocaleTimeString('en-US', {weekday: "short", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", pattern: "{hour}:{minute}" });

    let ticketPrice;
    if (event.ticket_price === 0) {
      ticketPrice = 'FREE';
    } else if (event.ticket_price === undefined) {
      ticketPrice = '';
    } else {
      ticketPrice = '$' + event.ticket_price.toString();
    }

    return (
      <div>
        <header>
          <NavbarContainer />
        </header>
        <div className="event-show-container-outer">
          <TicketFormContainer
            modalIsOpen={ this.state.modalIsOpen }
            closeModal={ this.closeModal }
            event={ event }
            dateTime={ dateTime }
            key={ event.id }
          />
          <br />
          <div className="event-show-container">
            <div>
              <img className="show-page-image" src={ event.image_url } />
            </div>

            <div className="show-event-details-wrapper">
              <div className="show-event-details">
                <p className="month month-show">{month}</p>
                <p className="day day-show">{day}</p>
                <h3>{ event.title }</h3>
                  <p className="organizer-show">
                    { organizer ? `by ${ organizer.username }` : " "}
                  </p>
              </div>
              <div className="ticket-priceDiv">
                <p>{ ticketPrice }</p>
              </div>
            </div>
          </div>

          <div className="bookmark-register-container">
            <BookmarkContainer event={ event } key={ event.id }/>
            <h3 className="register-button" onClick={ this.openModal }>REGISTER</h3>
          </div>
          <div className="event-show-moreDetails">
            <div className="description-show-page">
              <h4 className="event-show-headers">DESCRIPTION</h4>
              <p className="description-paragraph">{ event.description }</p>
            </div>

            <div className="eventDateTimeLocation">
              <h4 className="event-show-headers">DATE AND TIME</h4>
                <p className="date-location">{ dateTime }</p>
              <h4 className="event-show-headers">LOCATION</h4>
                <p className="date-location">{ event.location }</p>
            </div>
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
