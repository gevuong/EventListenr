import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;


// getState(); // should return initial app state
//
// const getSuccess = currentUser => dispatch(receiveCurrentUser(currentUser));
// fetchAllPokemon().then(getSuccess);
//
// getState();