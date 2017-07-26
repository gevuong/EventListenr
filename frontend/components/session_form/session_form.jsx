import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Carousel from '../carousel';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      modalIsOpen: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    // console.log(this.props.history);
    this.props.history.push("/");

  }

// always runs when component is mounted.
  componentDidMount() {
    this.props.clearErrors();
  }
  // supposed to run everytime your prop changes, but it's not.not called when component is initially mounts.
  // componentWillReceiveProps(nextProps) {
  //
  //     console.log(nextProps);
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  //   if (this.props.formType !== nextProps.formType) {
  //     this.props.clearErrors();
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}).then(() => this.props.history.push("/"));
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">login instead</Link>;
  //   }
  // }
  changeFormLink() {
    if (this.props.formType === 'login') {
      return (
        <p>Don't have an account? <Link className="signup-login-link" to='/signup'>Sign Up</Link>

        </p>
      );
    } else {
      return (
        <p>Already have an account? <Link className="signup-login-link" to='/login'>Login</Link></p>
      );
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.guestLogin( {user: {username: "guest", password: "password"}} );
    this.props.history.push("/");
  }

  render() {
    console.log(this.props.formType);
    let button_text = this.props.formType === 'login' ? "LOGIN" : "SIGN UP";
    return (
      <div>
        <Carousel />
        <Modal className="modal"

          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}

          contentLabel="Example Modal"
        >
        <br/>
          <div className="login-form-container">

            <form onSubmit={this.handleSubmit} className="login-form-box">
              <img className="logo" src="http://res.cloudinary.com/dtluc0y85/image/upload/v1500693476/Logomakr_right_color_feqswx.png"/>
              <br/>
              LETS GET STARTED
              <br/>
              {/* Please {this.props.formType} or {this.navLink()}*/}
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Username"
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                  />
                <br/>
              </div>
                <input className="session-form-submit-button" type="submit" value={button_text} />
                <button className="guest-login-button" onClick={this.guestLogin}>GUEST</button>

                <p>{ this.changeFormLink() }</p>
            </form>
          </div>
      </Modal>
    </div>
    );
  }
}

            // <p className="signup-session-terms">By signing up, I agree to EventListenr()'s terms of service, privacy policy, and community guidelines.</p>
export default withRouter(SessionForm);
