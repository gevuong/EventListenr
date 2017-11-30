import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("logout: ", this.props);
    this.props.logout()
    .then(() => this.props.history.push("/")); // produces a console warning in dev mode when pushing same URL as URL you are on. Warning is disabled in prod mode.
  }

  render() {
    const isLoggedIn = this.props.currentUser;

    return (
      <div className="main-nav">
        <div className="left-nav">
          <Link to="/">Eventlistenr</Link>
        </div>
        { isLoggedIn ?
          (
          <div className="right-nav">
            <div className="dropdown" style={{float:"right"}}>
              <div className='navlink-container'>
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                {this.props.currentUser.username.toUpperCase()}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="dropdown-content">
                <NavLink className="navlink-dropdown" to="/profile">Tickets</NavLink>
                <NavLink className="navlink-dropdown navlink-saved" to="/profile/bookmarked">Saved</NavLink>
                <button className='logout-button-container' onClick={this.handleClick}>Log out
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

export default withRouter(Navbar);
