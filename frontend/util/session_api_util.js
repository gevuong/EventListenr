// when a user logs in, user is found by credentials in SessionsController#create. Sends ajax request to receive user from backend.
export const login = user => (
  $.ajax({
    method: 'POST',
    url: `/api/session`,
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: `/api/users`, // url for the frontend
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: `/api/session`
  })
);

// incorporate
