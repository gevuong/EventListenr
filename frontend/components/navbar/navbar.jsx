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
    this.props.history.push("/")); // produces a console warning in dev mode when on same URL. Warning is disabled in prod mode.
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
              <Link to="/events/browse">
                <div className="navlink-container">
                  BROWSE EVENTS
                </div>
              </Link>

              <div className="dropdown" style={{float:"right"}}>
                <div className='navlink-container'>
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  {this.props.currentUser.username.toUpperCase()}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div className="dropdown-content">
                  <Link to="/profile">DASHBOARD</Link>
                  <button onClick={this.handleClick}>LOG OUT
                  </button>
                </div>
              </div>

              <Link to="/events/new">
                <div className="create-event-link">
                  CREATE EVENT
                </div>
              </Link>
            </div>
            ) :
            (
            <div className="right-nav">
              <Link to="/login">
                <div className="navlink-container">
                  LOGIN
                </div>
              </Link>
              <Link to="/signup">
                <div className="navlink-container">
                  SIGN UP
                </div>
              </Link>
              <Link to="/signup">
                <div className="create-event-link">
                  CREATE EVENT
                </div>
              </Link>
            </div>
            )
          }
      </div>
    );
  }
}

export default withRouter(NavBar);
