
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
    url: 'api/events'
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: event
  })
);

export const deleteEvent = event => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${event.id}`
  })
);
