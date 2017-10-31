import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
