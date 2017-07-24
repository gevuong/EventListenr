import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      events: this.props.events
    };
  }

  componentDidMount() {
    this.props.requestAllEvents().then(events => this.setState({events}));
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("2", nextProps);
  // }

  render() {
    console.log('4', this.state.events);
    console.log('5', this.state);
    
    const { events } = this.props;
    // const { events } = this.props;
    console.log("1", events);

      const allEvents = events.map(eventItem => (
          <EventIndexItem
            eventItem={eventItem}
            key={`event-${eventItem.id}`} />
        ));
      return (
        <div>
          Hi
          { events }
          { allEvents }
        </div>
      );
  }
}

export default EventIndex;

// const EventIndex = () => (
//   <div className="event-index-container">
//     <div className="event-container">
//       <p>Title</p>
//       <p>Description</p>
//       <p>Date</p>
//       <p>Price <Link to="/events/eventId">Event Show Page</Link></p>
//
//     </div>
//     <div className="event-container">
//       <p>Title2</p>
//       <p>Description2</p>
//       <p>Date2</p>
//       <p>Price2</p>
//     </div>
//     <div className="event-container">
//       <p>Title3</p>
//       <p>Description3</p>
//       <p>Date3</p>
//       <p>Price3</p>
//     </div>
//   </div>
// );
