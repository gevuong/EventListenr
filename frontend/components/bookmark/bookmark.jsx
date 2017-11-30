import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Bookmark extends Component {
  constructor(props) {
    super(props);

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  bookmarkIcon() {
    if ( this.props.currentUser.bookmarks.includes(this.props.event.id)) {
      return (
        <i className="fa fa-heart selected" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-heart-o unselected" aria-hidden="true"></i>
      );
    }
  }

  handleClick() {
    // console.log('handleClick: ', this.props);
    if (this.props.currentUser.bookmarks.includes(this.props.event.id)) {
      this.props.deleteBookmark(this.props.event.id);
    } else {
      const event = { event_id: this.props.event.id };
      this.props.createBookmark(event);
    }
  }

  render() {
    // console.log('bookmark_component: ', this.props);
    return(
      <div className="bookmark-icon" onClick={ this.handleClick }>{ this.bookmarkIcon() }
      </div>
    );
  }
}

export default Bookmark;
