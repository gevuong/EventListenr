import React from 'react';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  bookmarkIcon() {
    if ( this.props.eventDetail.bookmarked) {
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
    const bookmark = {}

    }
  }


  render() {
    return(
      <div className="bookmark-icon" onClick={this.handleClick}>{this.bookmarkIcon()}
      </div>
    );
  }
}

export default Bookmark;
