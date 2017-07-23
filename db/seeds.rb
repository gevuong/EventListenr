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
title: 'Paint Brushes Going Up!',
location: 'San Francisco, CA',
date_time: DateTime.new(2018,8,14,14,0,0),
description: 'Paint the town! Join us for a night of painting, wine/beer, and fun! Bring your friends!',
image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495503313/pexels-photo-114123_bkp3nz.jpg',
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
image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495225789/25warriors-web-master768_hqovsi.jpg',
ticket_price: 20,
ticket_quantity: 8000
)
