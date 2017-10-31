// Libs
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

// Components
import NavbarContainer from '../navbar/navbar_container';
import SlideShow from '../home/slide_show';

class SessionForm extends Component {
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
    this.props.history.push("/");

  }

// always runs when component is mounted.
  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
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
    let name = "guest";
    let password = "password";

    for (let i = 0; i < name.length; i++) {
      setTimeout(() => this.setState({
        username: name.slice(0, i + 1)}), (i * 80));
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({
        password: password.slice(0, j + 1)}), ((j + 5) * 80));
    }

    const user = {
      username: 'guest',
      password: 'password'
    };

    setTimeout(() => this.props.guestLogin({user}), 1500);
    // this.props.guestLogin( {user: {username: "guest", password: "password"}} );
    this.props.history.push("/");
  }

  render() {
    console.log(this.props.formType);
    let button_text = this.props.formType === 'login' ? "LOGIN" : "SIGN UP";
    return (
      <div>
        <NavbarContainer />
        <SlideShow />
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

export default withRouter(SessionForm);
