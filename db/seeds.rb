# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
guest = User.create(username: 'guest', password: 'password')
noah = User.create(username: 'Noah', password: 'password')
keith = User.create(username: 'Keith', password: 'password')
anastassia = User.create(username: 'Anastassia', password: 'password')
ravi = User.create(username: 'Ravi', password: 'password')
syrie = User.create(username: 'Syrie', password: 'password')
aaron = User.create(username: 'Aaron', password: 'password')
alex = User.create(username: 'Alex', password: 'password')
leo = User.create(username: 'Leo', password: 'password')

Event.destroy_all
e1 = Event.create(
organizer_id: noah.id,
title: 'Hot Air Balloon Tour',
location: 'Fort Mason, San Francisco, CA',
date_time: DateTime.new(2017, 11, 22, 7, 0, 0),
description: 'Learn how to capture great images for your next vacation. We will teach you how to capture magical moments on your next vacation. Learn about inexpensive and essential equipment and tools, how to work with complex cultural issues in the field, lighting/exposure tips and time-of-day solutions, and composition and balance in image design.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1500534760/homepage_photo_khrkqr.jpg',
ticket_price: 30,
ticket_quantity: 5
)

e2 = Event.create(
organizer_id: keith.id,
title: 'Paint Nite',
location: 'San Francisco, CA',
date_time: DateTime.new(2018,8,14,14,0,0),
description: 'Paint the town! Join us for a night of painting, wine/beer, and fun! Bring your friends!',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1500999493/painting_q99nzx.jpg',
ticket_price: 20,
ticket_quantity: 15
)

e3 = Event.create(
organizer_id: ravi.id,
title: 'Cal Academy of Sciences NightLife',
location: 'California Academy of Sciences, San Francisco, CA',
date_time: DateTime.new(2017,10,3,20,0,0),
description: 'A new adventure unfolds every Thursday night from 6-10pm. Enjoy music, creatures, and cocktails as you set out with friends on a journey to the stars and the depths of the sea.A variety of food options are available at NightLife from 6-9:30 pm, including the Academy Café, The Terrace (located in the West Garden), and convenient food cart in the front lobby.',
image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495485317/mezcal-nightlife-celebration-of-cinco-de-mayo-mex-i-am-sf-4_ziu0nu.jpg',
ticket_price: 15,
ticket_quantity: 300
)

e4 = Event.create(
organizer_id: anastassia.id,
title: 'Warriors vs Cavaliers',
location: 'Oakland, CA',
date_time: DateTime.new(2018,5,25,19,0,0),
description: 'Outside the Oracle, this is the biggest Warriors game watch party in San Francisco! We have everything you need to cheer on the Dubs as they battle through the 2018 playoffs. Watch the game in good company, with the loyal members of dubnation living it up outdoors with tons of seating, TVs, beer specials and food trucks.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1500999587/nbafinasl_y5dfxi.png',
ticket_price: 20,
ticket_quantity: 8000
)

e5 = Event.create(
    organizer_id: aaron.id,
    title: 'Surf City',
    location: 'Pacifica, CA',
    date_time: DateTime.new(2018,5,25,19,0,0),
    description: 'Surf Theory Lesson and a 2 Hour Water Lesson. There will be a break in the day for lunch (not provided) but there is a lovely local surf cafe on site, where you can enjoy a post yoga lunch and fuel up before an afternoon of surfing.',
    image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425777/photo-1415931633537-351070d20b81_oo08ke.jpg',
    ticket_price: 10,
    ticket_quantity: 10
  )

e6 = Event.create(
  organizer_id: alex.id,
  title: 'Bay Area Night Market',
  location: 'San Francisco, CA',
  date_time: DateTime.new(2017, 7, 7, 20, 0, 0),
  description: 'The Bay Area Night Market is an open air market hosting local food vendors and small businesses. The market celebrates the vibrant and diverse communities of the Bay Area and surrounding areas through cultural food, art and merchandise. Enjoy a night of eating, shopping, singing and playing.',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495428586/ae64c7d0d23a56611eb0d4dae43c3357_z6ffsv.png',
  ticket_price: 10,
  ticket_quantity: 100
)

e7 = Event.create(
  organizer_id: noah.id,
  title: 'SF Giants  vs. LA Dodgers',
  location: 'AT&T Park, San Francisco, CA',
  date_time: DateTime.new(2018, 1, 16, 7, 0, 0),
  description: 'Come see our very own San Francisco Giants take on the Los Angeles Dodgers! While AT&T Park is known for its breathtaking views of the Bay and classic design, its top notch dining options also make it one of the best ballparks in the country. Hungry fans will can chow down on everything from sushi and Chinese food to cheese plates and salads made from ingredients grown on the property. And dont forget Gilroy Garlic Fries! The Park also has a plethora of local beers, wine and killer cocktails.',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495484983/ATT-Park-night_a9wxlp.jpg',
  ticket_price: 35,
  ticket_quantity: 100
)

e8 = Event.create(
  organizer_id: keith.id,
  title: 'Off the Grid',
  location: 'Fort Mason, San Francisco, CA',
  date_time: DateTime.new(2018, 4, 22, 7, 0, 0),
  description: 'Off the Grid is a weekly outdoor food truck bonanza. Nearly 30 food vendors in a huge circle with a full bar and bands in the middle? Now that is what I call a party!',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495487769/off_the_grid_image1_am73xl.jpg',
  ticket_price: 0,
  ticket_quantity: 100
)

Ticket.destroy_all
Ticket.create(
  event_id: e8.id,
  user_id: guest.id,
  quantity: 5
)

Ticket.create(
  event_id: e6.id,
  user_id: guest.id,
  quantity: 3
)

Ticket.create(
  event_id: e5.id,
  user_id: noah.id,
  quantity: 5
)

Ticket.create(
  event_id: e4.id,
  user_id: keith.id,
  quantity: 1
)
