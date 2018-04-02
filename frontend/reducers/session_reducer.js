import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = ( state = nullUser, action ) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // console.log("session_reducer currentUser: ", currentUser);
      return Object.assign({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors }); // merge() is deep dup
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default sessionReducer;
// predefined state shape of currentUser
/*
{
  session: {
    currentUser: {
      id: 1,
      username: 'breakfast'
    },
    errors: []
  }
}
*/
