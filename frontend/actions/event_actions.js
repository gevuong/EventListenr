import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

// sync actions
export const receiveAllEvents = events =>({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = event => ({
  type: REMOVE_EVENT,
  event
});

// async thunk actions
export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event)
  .then(event => { dispatch(receiveEvent(event))
  })
);
