import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);

    console.log('EventShow', this.props);
  }

  // componentDidMount(){
  //   this.props.requestEvent(this.props.match.params.eventId);
  // }

  render() {
    return (
      <div className="event-show-container">
        <h3>Event Show Page</h3>

        <p>REGISTER</p>
      </div>
    );
  }
}

export default EventShow;
