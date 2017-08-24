import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.props.logout().then(() =>
    this.props.history.push("/"));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
        	<div className="header-group">
            <nav id="login-signup">
              <div className="eventListenr-home-container">
                <Link to="/">Eventlistenr</Link>
              </div>
              <div className="session-link-container">
                <Link to="/events/new">CREATE EVENT</Link>
                <Link to="/profile"><i className="fa fa-user-circle"  aria-hidden="true"></i>  { this.props.currentUser.username.toUpperCase() }</Link>
                <button className="header-button" onClick={this.handleOnClick}>LOG OUT
                </button>
              </div>
            </nav>
        	</div>
        </div>
      );
    } else {
        return (
          <nav id="login-signup">

            <div className="eventListenr-home-container">
              <Link to="/">EventListenr</Link>

            </div>
            <div className="session-link-container">
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGN UP</Link>
            </div>
          </nav>
        );
      }
  }
}

export default withRouter(NavBar);

// const sessionLinks = () => (
// // add auth route
//     <nav id="login-signup">
//
//       <div className="eventListenr-home-container">
//         <Link to="/">EventListenr()</Link>
//
//       </div>
//       <div className="session-link-container">
//         <Link to="/login">LOGIN</Link>
//         <Link to="/signup">SIGN UP</Link>
//       </div>
//     </nav>
// );
//
// // and protected route.
//
// const personalGreeting = (currentUser, logout) => (
//   <div>
//   	<div className="header-group">
//       <nav id="login-signup">
//         <div className="eventListenr-home-container">
//           <Link to="/">EventListenr()</Link>
//         </div>
//         <div className="session-link-container">
//           <Link to="/events/new">CREATE EVENT</Link>
//           <Link to="/users/userId"><i className="fa fa-user-circle"  aria-hidden="true"></i></Link>
//           <button className="header-button" onClick={ logout }>LOG OUT
//           </button>
//
//         </div>
//       </nav>
//
//   	</div>
//     <div className='homepage-image'></div>
//
//     <div className="event-index-container">
//       <div className="event-container">
//         <p>Title</p>
//         <p>Description</p>
//         <p>Date</p>
//         <p>Price</p>
//       </div>
//       <div className="event-container">
//         <p>Title2</p>
//         <p>Description2</p>
//         <p>Date2</p>
//         <p>Price2</p>
//       </div>
//       <div className="event-container">
//         <p>Title3</p>
//         <p>Description3</p>
//         <p>Date3</p>
//         <p>Price3</p>
//       </div>
//     </div>
//   </div>
// );
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );
//
// export default Greeting;

      // <h3 className="header-name">Hi, {currentUser.username}!</h3>
