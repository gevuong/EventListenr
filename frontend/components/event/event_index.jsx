import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestAllEvents();
    // test this.props.requestAllEvents().then(events => (console.log(events)))
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("2", nextProps);
  // }

  render() {
    // console.log("event_index: ", this.props);
    const { events } = this.props;

    return (
      <div className="event-index-wrapper">
        <h3 className="event-list-header">
          Events for you in San Francisco, CA, United States
        </h3>
        <div className="event-index-container">
          { events.map(eventItem => (
              <EventIndexItem eventItem={ eventItem } key={ eventItem.id }/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default EventIndex;
