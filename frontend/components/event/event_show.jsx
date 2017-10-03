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
    console.log('event: ', event.date_time);;
    return (
      <div className="event-show-container-outer">
        <TicketFormContainer modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} event={event}/>
        <br />
        <div className="event-show-container">
          <h3>
            <img className="show-page-image" src={event.image_url} />
          </h3>

          <div className="show-page-event-details">
            <h3 className='eventTitleShow'>{event.title}</h3>
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
            <h4 className="event-show-headers">Description</h4>
            <p>{event.description}</p>
          </div>

          <div>
            <h4 className="event-show_headers">DATE AND TIME</h4>
              <p>{event.date_time}</p>
            <h4 className="event-show-headers">LOCATION</h4>
              <p>{event.location}</p>
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
