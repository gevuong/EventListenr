```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'gevuong',
    }
  },
  errors: [],

  events: {
    1: {
      id: 1,
      organizer_id: 1,
      title: 'Reggae in the Bay',
      location: 'Santa Clara County Fairgrounds',
      date: 'July 22, 2017',
      image: image_url,
      ticket_price: 30,
      categories: [
        'Music',
        'Performance'
        ]
      },
    2: {
      id: 2,
      organizer_id: 1,
      title: 'Walk by Golden Gate',
      location: 'Crissy Field',
      date: 'September 21, 2017',
      image: image_url,
      ticket_price: 0
      categories: [
        'networking',
        'Things To Do'
        ]
      }
    },
  eventDetail: {
    id: 1,
    organizer_id: 1,
    title: 'Reggae in the Bay',
    location: 'Santa Clara County Fairgrounds',
    date: 'July 22, 2017',
    time: '11:00am',
    description: 'All ages event',
    image: image_url,
    ticket_price: 30,
    ticket_quantity: 1000,
    categories: [
      'Music',
      'Performance'
      ]
  },

  categories: {
    1: {
      events: 1
    },
    id: 1,
    name: 'Music'
  },

  user: {
    events: {
      1   //event_ids for user's registered events
    },
    bookmarks: {
      1, 2
    },
    tickets: {
      1
    }
  }
}
```
