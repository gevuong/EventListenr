# EventListenr

[Trello Link](https://trello.com/b/WcxLln60/eventlistenr)

[Heroku Link](https://eventlistenr.herokuapp.com/)

## Minimum Viable Product
EventListenr is a web application inspired by EventBrite built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

  1. New account creation, login, and guest/demo login
  2. A production README, replacing this README (NB: check out the  sample production README -- you'll write this later)
  3. Hosting on Heroku
  4. Events
  5. Registration / Tickets
  6. Categories
  7. Bookmark events

  8. Bonus: Google Maps integration
  9. Bonus: Search

## Design Docs
* [View Wireframes](https://github.com/gevuong/EventListenr/tree/master/docs/wireframes)
* [React Component Hierarchy](https://github.com/gevuong/EventListenr/blob/master/docs/component_hierarchy.md)
* [API endpoints](https://github.com/gevuong/EventListenr/blob/master/docs/api-endpoints.md)
* [DB schema](https://github.com/gevuong/EventListenr/blob/master/docs/schema.md)
* [Sample State](https://github.com/gevuong/EventListenr/blob/master/docs/sample-state.md)

## Feature Implementation Timeline:

### Phase 1: Backend setup & Frontend User Auth Setup (2 days)

### Phase 2: Events (2 days)
Users can create events
Events can be created, deleted or edited through the API
Events have many tickets
Users can browse events
Users can bookmark/unbookmark events through the API

### Phase 3: Tickets (1 Day)
Users "register" to events by "purchasing" tickets for events
Limit quantity of tickets available
Purchased tickets appear on User Dashboard under "Purchased Tickets"

### Phase 4: Categories (2 Days)
Users can specify which category their event falls under when creating a new event
Users can browse/search for events by category

### Phase 5: Bookmarking Events (1 Day)
Users can bookmark events that they have not already purchased
Events can be bookmarked or unbookmarked from anywhere on the site (Search, Browse, Saved Events)
Bookmarked events appear/disappear from Saved Events tab of User Dashboard upon toggling bookmark icon


### Bonus Features (TBD)
Google Maps
Interactive map showing the event's location on the event show page
Interactive map showing multiple events on search results page
Search
Autocomplete search feature allows users to search for events by category or by event name
