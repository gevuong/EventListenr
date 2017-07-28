import merge from 'lodash/merge';
import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';

const nullEvent = Object.freeze({
  events: {},
  errors: []
});

let currentState;

const eventReducer = (state = nullEvent, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_EVENTS:
      const events = action.events;
      return merge({}, state, { events });
    case RECEIVE_EVENT:
      const event = action.event;
      return merge({}, state, { events: { [event.id]: event } });
    case REMOVE_EVENT:
    // first dup current state, then find event and delete item.
      currentState = merge({}, state);
      delete currentState[action.event.id];
      return currentState;
    default:
      return state;
  }
};

export default eventReducer;
