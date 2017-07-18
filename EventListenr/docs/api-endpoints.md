# API Endpoints

#HTML API

## Root
  Prefix | Verb | URI Pattern | Controller#Action
- `root`   `GET`      `/`      `static_pages#root`


# JSON API
## Users
- `POST /api/users` - Sign Up
- `PATCH /api/users` - Edit User Info

## Session
- `POST /api/users` `session#create`- Login
- `DESTROY api/users/:id` `session#destroy`- Logout

## Events
- `GET /api/events`  `events#index` List all events
- `POST /api/events`  `events#create;
- "GET /api/events/:id"  `events#show`
- `PATCH /api/events/:id` 'events#update';
- `DELETE /api/events/:id` 'events#destroy';

## Tickets/Registrations
NB: Does not require users/:id/tickets because current_user is stored in the backend.
<!-- - `GET /api/tickets` tickets#       -->
- `POST /api/events/:id/tickets`
- `GET /api/tickets/:id`
- `DELETE /api/tickets/:id`

## Bookmarks
- `GET /api/events/:event_id/bookmarks`
- `POST /api/events/:event_id/bookmarks`
- `GET /api/bookmarks/:id       bookmarks#show`
- `DELETE /api/bookmarks/:id    bookmarks#destroy`

## Categories
- `GET /api/categories`
- `POST /api/categories` (uses event id to make new association to an event)
- `GET /api/categories/:id` show page for particular category 
<!-- - `DELETE /api/categories/:id` -->
