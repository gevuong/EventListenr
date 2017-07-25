import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }

  componentDidMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }

  componentWillReceiveProps() {
    if (!event) {
      event = {};
    }
  }
  // a render occurs when
  //1. a component is instantiated
  //2. when the state changes
  //3. when setState is called

  render() {
    // let event = this.props.events[this.props.match.params.eventId];
    let key = this.props.match.params.eventId;
    let event = this.props.event[key] ? this.props.event[key] : {};

    return (
      <div className="event-show-container">

        <h3>
          <img className="show-page-image" src={event.image_url} />
        </h3>
        <div>
          <h3>{event.title}</h3>
          <p>Location: {event.location}</p>

          <p>Date and Time: {event.date_time}</p>
          <p>Price: {event.ticket_price}</p>
          <p>Quantity: {event.ticket_quanity}</p>
          <p>REGISTER</p>
        </div>
        <div>
          <p>Description: {event.description}</p>
        </div>
      </div>
      );
    }
}

export default EventShow;
// console.log('match', this.props.match.params.eventId);
// console.log('events', this.props.events);
// console.log('event', event);
// if (!event) {
//   event = {};
//   console.log("triggers?");
// }
