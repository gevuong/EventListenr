import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    guestLogin: user => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
