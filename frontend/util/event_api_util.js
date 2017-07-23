
export const fetchAllEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
  })
);

export const fetchEvent = event => (
  $.ajax({
    method: 'GET',
    url: `api/events/${event.id}`,
    data: event
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
    data: event
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

window.createEvent = createEvent;
window.deleteEvent = deleteEvent;
