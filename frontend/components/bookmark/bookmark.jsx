import React from 'react';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  bookmarkIcon() {
    console.log(this.props);
    if ( this.props.currentUser.bookmarks.includes(this.props.event.id)) {
      return (
        <i className="fa fa-bookmark selected" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
      );
    }
  }

  handleClick() {
    if (this.props.currentUser.bookmarks.includes(this.props.event.id)) {
      this.props.deleteBookmark(this.props.event.id);
    } else {
      const event = { event_id: this.props.event.id };
      this.props.createBookmark(event);
    }
  }
  render() {
    return(
      <div className="bookmark-icon" onClick={this.handleClick}>{ this.bookmarkIcon() }
      </div>
    );
  }
}

export default Bookmark;
