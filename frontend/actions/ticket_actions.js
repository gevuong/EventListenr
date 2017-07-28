import * as TicketAPIUtil from '../util/ticket_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_ALL_TICKETS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_TICKET = "RECEIVE_EVENT";

// sync actions
export const receiveAllTickets = tickets => ({
  type: RECEIVE_ALL_TICKETS,
  tickets
});

export const receiveTicket = ticket => ({
  type: RECEIVE_TICKET,
  ticket
});

// async thunk actions
export const requestAllTickets = () => dispatch => {
  return TicketAPIUtil.fetchAllTickets().then(
    tickets => (
      dispatch(receiveAllTickets(tickets))
    )
  );
};

export const requestTicket = id => dispatch => (
  TicketAPIUtil.fetchTicket(id).then(
    ticket => (
      dispatch(receiveTicket(ticket))
    )
  )
);

export const createTicket = ticket => dispatch => (
  TicketAPIUtil.createTicket(ticket).then(
    user => (
      dispatch(receiveCurrentUser(user))
    )
  )
);
