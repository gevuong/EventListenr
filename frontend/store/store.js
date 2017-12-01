import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';


const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = rquire('redux-logger');
  
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;


// getState(); // should return initial app state
//
// const getSuccess = currentUser => dispatch(receiveCurrentUser(currentUser));
// fetchAllEvents().then(getSuccess);
//
// getState();
