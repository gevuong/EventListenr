import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() =>
    this.props.history.push("/")); // produces a console warning in dev mode when pushing same URL as URL you are on. Warning is disabled in prod mode.
  }

  render() {
    const isLoggedIn = this.props.currentUser;
    console.log(this.props);
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
                <Link to="/profile">DASHBOARD</Link>
                <button className='logout-button-container' onClick={this.handleClick}>LOG OUT
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
