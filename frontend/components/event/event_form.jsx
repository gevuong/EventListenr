import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'aopdku36';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dtluc0y85/image/upload';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      location: "",
      date_time: "",
      image_url: "",
      ticket_price: 0,
      ticket_quantity: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .FIELD('file', file);

    upload.end((err, response) => {
      if(err) {
        console.error(err);
      }

      if(response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
// invoked immediately after a component is mounted
  // componentDidMount() {
  //   this.props.createEvent();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event);
  }

  update(events) {
    return e => this.setState({
      [events]: e.target.value
    });
  }

  render() {
    const { title, description, location, date_time, image_url, ticket_price, ticket_quantity } = this.state;
    console.log("render test");


    <div>
      <div className="FileUpload">

      </div>

      <div>
        { this.state.uploadedFileCloudinaryUrl === "" ? null :
        <div>
          <p>{ this.state.uploadedFile.name }</p>
          <img src={ this.state.uploadedFileCloudinaryUrl } />
        </div>}
      </div>
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop.bind(this)}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
    </div>

    return (
      <div className="event-form-container">
        <h3>Create an Event</h3>

        <form className="event-form" onSubmit={this.handleSubmit}>
          <label>TITLE</label>
          <input
            className="create-event-title"
            type="text"
            value={title}
            onChange={this.update('title')}
          />
        <br />
        <label>DESCRIPTION</label>
          <input
            className="create-event-description"
            type="text"
            value={description}
            onChange={this.update('description')}
          />
        <br/>
        <label>LOCATION</label>
            <input
              className="create-event-location"
              type="text"
              value={location}
              onChange={this.update('location')}
            />

          <br/>
          <label>Date and Time</label>
            <input
              className="create-event-datetime"
              type="text"
              value={date_time}
              onChange={this.update('date_time')}
            />
          <br/>
          <label>Ticket Price</label>
            <input
              className="ticket-price"
              type="number"
              value={ticket_price}
              onChange={this.update('ticket_price')}
            />
          <br/>
          <label>Ticket Quantity</label>
            <input
              className="ticket-quantity"
              type="number"
              value={ticket_quantity}
              onChange={this.update('ticket_quantity')}
            />
        </form>
      </div>
    );
  }
}

export default EventForm;
