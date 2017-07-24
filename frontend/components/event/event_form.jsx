import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.createEvent();
  }

  render() {
    return (
      <div className="event-form-container">
        <h3>Event Form</h3>
      </div>
    );
  }
}

export default EventForm;
