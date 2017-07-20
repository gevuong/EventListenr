import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

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

// not called when component is initially mounts.
//only
  componentDidMount() {
    this.props.clearErrors();
  }
  // supposed to run everytime your prop changes, but it's not
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
    this.props.processForm({user});
    this.props.history.push("/");
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">login instead</Link>;
  //   }
  // }

  renderErrors() {
    return(
      <ul>
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
    // // if this.state.modalIsOpen === undefined {
    // this.openModal
  // }
    const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

    // if (this.props.location.path === "/guest") {
    //   return (
    //     <h3>this.guestAccount()</h3>
    //   );
    // }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <button onClick={this.guestLogin}>Demo</button>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to EventListenr!
              <br/>
              {/* Please {this.props.formType} or {this.navLink()}*/}
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <label>Username:
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
      </Modal>
    </div>
    );
  }
}

export default withRouter(SessionForm);
