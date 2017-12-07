// should dispatch an $.ajax request and return a promise. The success function is chained onto this promise in the thunk action creator.
export const fetchAllEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event }
  })
);

export const updateEvent = id => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data: { event }
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);


// window.fetchAllEvents = fetchAllEvents;
// window.fetchEvent = fetchEvent;
// window.createEvent = createEvent;
// window.updateEvent = updateEvent;
// window.deleteEvent = deleteEvent;

// createEvent( {event: {title: "title", description: "description", date_time: new Date(), image_url: "link", ticket_price: 10, ticket_quantity: 15, organizer_id: 4, category_id: [5] } });
