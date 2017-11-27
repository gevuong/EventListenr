import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllEvents();
    // test this.props.requestAllEvents().then(events => (console.log(events)))
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("2", nextProps);
  // }

// when you need to explicitly tell it to (i.e. ajax request) based on change of props
  render() {
    const { events } = this.props;
    // console.log("event_index: ", this.props);
    let eventList = events.map(eventItem => (
      <EventIndexItem key={ eventItem.id }
        eventItem={ eventItem }
      />
    ));

    return (
      <div className="event-index-wrapper">
        <h3 className="event-list-header">
          Events for you in San Francisco, CA, United States
        </ h3>
        <div className="event-index-container">
          { eventList }
        </div>
      </div>
    );
  }
}

export default EventIndex;
