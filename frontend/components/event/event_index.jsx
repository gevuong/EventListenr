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
    console.log('4', this.state.events.events);
    // console.log('5', this.state);
    // const { events } = this.props;
    // const eventKeys = Object.keys(this.state.events.events);

    // let allEvents = eventKeys.map(key => (
    //   this.state.events.events[key]
    // ));
    // // console.log('6', allEvents);
    //
    //   allEvents.map(eventDetail => (
    //     <EventIndexItem
    //       allEvents={allEvents}
    //     />
    //   ));

    return (
      <div>
        Hi
      </div>
      );
  }
}

export default EventIndex;
