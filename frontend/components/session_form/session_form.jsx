// Libs
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
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
    this.props.processForm({ user }).then(() => this.props.history.push("/"));
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
        <div>
          <p className="change-form-question">New to Eventlistenr?</p>
          <p>
            <NavLink className="signup-login-link" to='/signup'>
            Create account
            </NavLink>
          </p>
        </div>
      );
    } else {
      return (
        <div>
        <p className="change-form-question">Already have an account?</p>
          <p>
            <NavLink className="signup-login-link" to='/login'>Sign in
            </NavLink>
          </p>
        </div>
      );
    }
  }

  renderErrors() {
    console.log("errors: ", this.props.errors);
    return (
      <div className="errors-container">
        {this.props.errors.map((error, idx) => (
          <li className="errors" key={`error-${idx}`}>
            { error }
          </li>
        ))}
      </div>
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
    const { formType } = this.props;
    console.log('formtype: ', formType);

    let button_text = this.props.formType === 'login' ? "Sign in" : "Create Account";
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

          <div className="login-form-container">

            <form onSubmit={this.handleSubmit} className="login-form-box">
              <img className="logo" src="http://res.cloudinary.com/dtluc0y85/image/upload/v1500693476/Logomakr_right_color_feqswx.png"/>
              <ul>
                <li className="header-text-li">
                  <p className='modal-header-text'>
                    Let's get started
                  </p>
                </li>
                {this.renderErrors()}
                <li className="username-password-li">
                  <div>
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="username-password-input" id="username-input"
                      placeholder="username"
                    />
                  </div>
                </li>
                <li className="username-password-li">
                  <div>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="username-password-input"
                      placeholder="password"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <input className="guest-login-button" type="submit" value={button_text} />
                  </div>
                </li>
                <li>
                  <div>
                    <button className="guest-login-button" onClick={this.guestLogin}>Demo login</button>
                  </div>
                </li>
                <li>
                  <p className="change-form-link">{ this.changeFormLink() }</p>
                </li>
              </ul>
            </form>
          </div>
      </Modal>
    </div>
    );
  }
}

export default withRouter(SessionForm);
