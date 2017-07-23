import * as EventAPIUtil from '../util/event_api_util';
import { receiveErrors, clearSessionErrors } from './session_actions';

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

// async thunk actions, used in container
export const fetchAllEvents = () => dispatch => (
  EventAPIUtil.fetchAllEvents().then(events => (
    dispatch(receiveAllEvents(events))
  )),
    errors => dispatch(receiveErrors(errors))
);

export const fetchEvent = id => dispatch => (
  EventAPIUtil.fetchEvent(id).then(event => (
    dispatch(receiveEvent(event))
  )),
    errors => dispatch(receiveErrors(errors))
);

export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event).then(event => (                       dispatch(receiveEvent(event))
  )),
  errors => dispatch(receiveErrors(errors))
);

export const deleteEvent = event => dispatch => (
  EventAPIUtil.removeEvent(event).then(event => (
    dispatch(removeEvent(event))
  )),
    errors => dispatch(receiveErrors(errors))
);
