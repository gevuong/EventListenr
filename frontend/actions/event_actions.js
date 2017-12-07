import * as EventAPIUtil from '../util/event_api_util';
// import { receiveErrors, clearSessionErrors } from './session_actions';

// export action types
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

// sync actions
export const receiveAllEvents = events => ({
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

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
})

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
})

// async thunk actions, used in container
export const requestAllEvents = () => dispatch => {
  return EventAPIUtil.fetchAllEvents().then(
    events => (
      dispatch(receiveAllEvents(events)),
      dispatch(clearEventErrors())
    ),
    errors => dispatch(receiveEventErrors(errors))
  );
};

export const requestEvent = id => dispatch => (
  EventAPIUtil.fetchEvent(id).then(event => (
    dispatch(receiveEvent(event)),
    dispatch(clearEventErrors())
  )),
    errors => dispatch(receiveEventErrors(errors))
);

export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event).then(event => (               dispatch(receiveEvent(event)),
  dispatch(clearEventErrors())
  )),
  errors => dispatch(receiveEventErrors(errors.responseJSON))
);

export const deleteEvent = event => dispatch => (
  EventAPIUtil.deleteEvent(event.id).then(event => (
    dispatch(removeEvent(event)),
    dispatch(clearEventErrors())
  )),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
);

export const editEvent = event => dispatch => (
  EventAPIUtil.updateEvent(event.id).then(event => (
    dispatch(receiveEvent(event)),
    dispatch(clearEventErrors())
  )),
    errors => dispatch(receiveEventErrors(errors))
);
