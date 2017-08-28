# EventListenr

[EventListenr Live](https://eventlistenr.herokuapp.com/)

EventListenr is a single page web application inspired by Eventbrite, allowing users to discover, host, and create events, bookmarks events, and register for an event via online ticketing. This full-stack web app was built using Ruby on Rails, React/Redux, and PostgreSQL database.


## Technologies
The backend architecture uses Rails 5.0.4's MVC web framework to fetch and store data to PostgreSQL database. The front end application uses React/Redux.


## Features and Implementation
* Secure user accounts, using front-end and back-end user authentication using BCrypt
* User has the ability to create events
* User can bookmark/unbookmark events
* User can purchase tickets to events
* User Dashboard displays purchased tickets and bookmarked events.


### Home Page
![EventListenr Home page](docs/images/homepage_event_index.png)

### User Login/Signup format
![EventListenr](docs/images/session_form.png)

### Event Show Page
![EventListenr](docs/images/event_show_page.png)

### Create Events
User can create events. User created events immediately show on the home page. Images can be uploaded via drag and drop feature using React Dropzone.

### Bookmarking Events
User can bookmark/unbookmark events. Bookmarked events are shown on the User Dashboard.

### Registering/Ticketing Events
User can "register" to events by "purchasing" tickets to events.
Events with purchased tickets appear on the User Dashboard.

### User Dashboard
![EventListenr User Dashboard](docs/images/User_profile.png)

## Additional Resources
* [View Wireframes](https://github.com/gevuong/EventListenr/tree/master/docs/wireframes)
* [React Component Hierarchy](https://github.com/gevuong/EventListenr/blob/master/docs/component_hierarchy.md)
* [API endpoints](https://github.com/gevuong/EventListenr/blob/master/docs/api-endpoints.md)
* [DB schema](https://github.com/gevuong/EventListenr/blob/master/docs/schema.md)
* [Sample State](https://github.com/gevuong/EventListenr/blob/master/docs/sample-state.md)


## Future Direction
I plan to incorporate additional features to this application, such as the following:
* Incorporating categories
* Modifying Created Events
Allow user to edit and delete created event
* Google Maps
Interactive map showing the event's location on the event show page
Interactive map showing multiple events on search results page
* Search
Autocomplete search feature allows users to search for events by category or by event name
