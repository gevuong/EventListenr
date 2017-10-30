import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// var rightNavbar;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.selectNavbar = this.selectNavbar.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() =>
    this.props.history.push("/"));
  }

  // selectNavbar() {
  //   const isLoggedIn = this.props.currentUser;
  //
  //   if (isLoggedIn) {
  //     return (
  //       <div className="right-navbar">
  //         <Link to="/events/new">CREATE EVENT</Link>
  //         <Link to="/profile"><i className="fa fa-user-circle"aria-hidden="true"></i>
  //           { this.props.currentUser.username.toUpperCase() }
  //         </Link>
  //         <button className="header-button" onClick={this.handleClick}>LOG OUT
  //         </button>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="right-navbar">
  //         <div className="session-link-container">
  //           <Link to="/login">LOGIN</Link>
  //         </div>
  //         <div className="session-link-container">
  //           <Link to="/signup">SIGN UP</Link>
  //         </div>
  //       </div>
  //     )
  //   }
  // }

  render() {
    const isLoggedIn = this.props.currentUser;
    // let rightNavbar = this.selectNavbar();
    return (
      <div className="main-nav">
        <div className="left-nav">
          <Link to="/">Eventlistenr</Link>
        </div>
          { isLoggedIn ?
            (
            <div className="right-nav">
              <Link to="/events/new">CREATE EVENT</Link>
              <Link to="/profile"><i className="fa fa-user-circle"aria-hidden="true"></i>
                { this.props.currentUser.username.toUpperCase() }
              </Link>
              <button className="header-button" onClick={this.handleClick}>LOG OUT
              </button>
            </div>
            ) :
            (
            <div className="right-nav">
              <div className="session-link-container">
                <Link to="/login">LOGIN</Link>
              </div>
              <div className="session-link-container">
                <Link to="/signup">SIGN UP</Link>
              </div>
              <div className="create-event-link">
                <Link id='creat-event-link' to="/signup">CREATE EVENT</Link>
              </div>
            </div>
            )
          }
      </div>
    );
  }
}

export default withRouter(NavBar);
