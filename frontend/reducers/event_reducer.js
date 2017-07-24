import merge from 'lodash/merge';
import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';

const nullEvent = Object.freeze({
  events: null,
  errors: []
});

let currentState;

const eventReducer = (state = nullEvent, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_EVENTS:
      const events = action.events;
      return merge({}, nullEvent, { events });
    case RECEIVE_EVENT:
      const event = action.event;
      return merge({}, nullEvent, { event });
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

// Sample state shape
// events: {
//   errors: [],
//   all_events: {
//     1: {
//       id: 1,
//       organizer_id: 1,
//       title: 'Reggae in the Bay',
//       description: '...',
//       location: 'Santa Clara County Fairgrounds',
//       date: 'July 22, 2017',
//       image: image_url,
//       ticket_price: 30,
//       ticket_quantity: 100,
//       category_id: [1, 2, 3]
//     },
//
//     2: {
//       id: 2,
//       organizer_id: 1,
//       title: 'Walk by Golden Gate',
//       description: '...',
//       location: 'Crissy Field',
//       date: 'September 21, 2017',
//       image: image_url,
//       ticket_price: 0,
//       ticket_quantity: 100,
//       category_id: [1, 2, 3]
//     }
//   }
// }
