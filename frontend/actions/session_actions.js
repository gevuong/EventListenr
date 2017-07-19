import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk actions creators
export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = user => dispatch => (
  APIUtil.logout(user)
  .then(user => dispatch(receiveCurrentUser(null)))
);
