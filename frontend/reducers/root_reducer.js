import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import eventReducer from './event_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  event: eventReducer 
});

export default rootReducer;
