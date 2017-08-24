# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
guest = User.create(username: 'guest', password: 'password')
lotus = User.create(username: 'Lotus', password: 'password')
roger = User.create(username: 'Roger', password: 'password')
george = User.create(username: 'George', password: 'password')
noah = User.create(username: 'Noah', password: 'password')
keith = User.create(username: 'Keith', password: 'password')
anastassia = User.create(username: 'Anastassia', password: 'password')
ravi = User.create(username: 'Ravi', password: 'password')
syrie = User.create(username: 'Syrie', password: 'password')
aaron = User.create(username: 'Aaron', password: 'password')
alex = User.create(username: 'Alex', password: 'password')
leo = User.create(username: 'Leo', password: 'password')
jared = User.create(username: 'Jared', password: 'password')
evelyn = User.create(username: 'Evelyn', password: 'password')
isak = User.create(username: 'Isak', password: 'password')
greg = User.create(username: 'Greg', password: 'password')
young = User.create(username: 'Young', password: 'password')
mary = User.create(username: 'Mary', password: 'password')
isak = User.create(username: 'Isak', password: 'password')


Event.destroy_all
e1 = Event.create(
organizer_id: noah.id,
title: 'Photography Walk',
location: 'Fort Mason, San Francisco, CA',
date_time: DateTime.new(2017, 11, 22, 7, 0, 0),
description: 'Learn how to capture great images for your next vacation. We will teach you how to capture magical moments on your next vacation. Learn about inexpensive and essential equipment and tools, how to work with complex cultural issues in the field, lighting/exposure tips and time-of-day solutions, and composition and balance in image design.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1500957120/subtle-animated-gif-18_pqgcuc.gif',
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
ticket_price: 45,
ticket_quantity: 10000
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
  organizer_id: mary.id,
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

e9 = Event.create(
  organizer_id: jared.id,
  title: 'Kids Obstacle Challenge',
  location: 'San Francisco, CA',
  date_time: DateTime.new(2018, 7, 16, 7, 0, 0),
  description: 'Kids Obstacle Challenge is the largest touring adventure and obstacle course event series for kids in the country, and it’s coming to your town! Sign up your eager adventurers for a 1-2-mile course filled with exciting and challenging obstacles designed specifically for kids ages 5-16. Participants can rope swing into a giant mud pit, army crawl through tough terrain, scale up rugged cargo nets, and slide into a muddy paradise! And the best part is, it is a FAMILY adventure - parents get to run with their kids for free! Don’t miss the chance for your kiddos to push their limits and have fun!',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495429108/6ba4d31d40efe7e3c72b34f41feab105_obs6-kids-obstacle-course-crawling-through-tunnel-clipart_4000-2667_sgqrwz.jpg',
  ticket_price: 35,
  ticket_quantity: 100
)

e10 = Event.create(
    organizer_id: young.id,
    title: 'Kehlani',
    location: 'Greek Theatre, UC Berkeley',
    date_time: DateTime.new(2018,6,23,20,0,0),
    description: 'Kehlani tells it like it is. Whether in conversation or on stage, the Oakland-born R&B singer and songwriter gives the straight truth about her life, pain, passion, love, triumph, and everything in between with collected calm and confidence. It’s that type of honesty that makes her music resonate with the depth of classic Motown and a vividly confessional lyricism reminiscent of Neo Soul. Come see her sing her story.',
    image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495426563/1480548485747_vrl9dk.jpg',
    ticket_price: 30,
    ticket_quantity: 1000
  )

e11 = Event.create(
    organizer_id: keith.id,
    title: 'Jo Koy',
    location: 'Cobbs Comedy Club',
    date_time: DateTime.new(2018,2,3,20,0,0),
    description: 'Lights out Vegas because this feisty Filipino is taking us home for a night of ab-busting laughs and tear jerking jokes. Hello, six pack. We don’t know what’s funnier his initials or his jokes. Just kidding, we love him and his mom. He talks so much about her it’s like she’s on stage with him. Catch the comedian poke fun at his family heritage and many other things on stage.',
    image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495426900/Wood-Background-Gold-Logo_rfx5rd.jpg',
    ticket_price: 30,
    ticket_quantity: 100
  )


e12 = Event.create(
    organizer_id: anastassia.id,
    title: 'Yoga in the City',
    location: 'San Francisco, CA',
    date_time: DateTime.new(2018,10,25,19,0,0),
    description: 'Stretch. Breathe. Elevate Your Senses. Join us for a deeply nourishing, all levels, floor-based, yin/restorative yoga class with hands-on adjustments and tea afterwards.',
    image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425717/photo-1485727749690-d091e8284ef3_tqz4r2.jpg',
    ticket_price: 10,
    ticket_quantity: 30
  )

e13 = Event.create(
organizer_id: isak.id,
title: 'Bay Area Peace Lantern Ceremony',
location: 'Aquatic Park, Berkeley, CA',
date_time: DateTime.new(2017, 9, 5, 18, 30, 0),
description: 'Join us for the 16th annual Peace Lantern Ceremony at the north end of Berkeley Aquatic Park.',
image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495427793/d5f32508_ac0map.jpg',
ticket_price: 0,
ticket_quantity: 0
)

e14 = Event.create(
  organizer_id: evelyn.id,
  title: 'Nor Cal Corgi Con',
  location: 'Ocean Beach, San Francisco, CA',
  date_time: DateTime.new(2018, 6, 5, 10, 30, 0),
  description: 'We look FURward to seeing everypawdy at Nor Cal Corgi Con. Corgi costume contest, races, and merchandise!',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495427941/Pembroke-Welsh-Corgi-Puppy-Lying-Down_z8dgzw.jpg',
  ticket_price: 0,
  ticket_quantity: 0
)

e15 = Event.create(
  organizer_id: guest.id,
  title: 'SF Jazz Block Party',
  location: 'San Francisco, CA',
  date_time: DateTime.new(2017, 8, 5, 10, 30, 0),
  description: 'FREE Block Party in Hayes Valley to kick off the San Francisco Jazz Festival. Featuring live music, food and drinks!',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495428292/block-party_eodfax.jpg',
  ticket_price: 0,
  ticket_quantity: 0
)


e16 = Event.create(
  organizer_id: aaron.id,
  title: 'Movie Night',
  location: 'San Francisco, CA',
  date_time: DateTime.new(2017,11,25,19,0,0),
  description: 'HIDDEN FIGURES! Hidden Figures tells the story of three African American female mathematicians and contributions to NASA and the space program. Join us for film, refreshments, and discussion as we present this movie on an HD projector to make the experience as cinematic as possible. We ask that only ages 13+ attend this screening.',
  image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495225739/hidden_figures_zrmb77.jpg',
  ticket_price: 10,
  ticket_quantity: 30
)

e17 = Event.create(
organizer_id: noah.id,
title: 'Tahiti Fete',
location: 'San Jose, CA',
date_time: DateTime.new(2018, 7, 4, 10, 0, 0),
description: 'The largest Tahitian dance competition in the United States.',
image_url: 'https://res.cloudinary.com/db08acmvn/image/upload/v1495425523/TF_MANUIA_APARIMA_f7qvkp.jpg',
ticket_price: 20,
ticket_quantity: 1000
)

e18 = Event.create(
organizer_id: greg.id,
title: 'Saturday Morning Outdoor Vinyasa Flow @ Crissy Field',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 29, 10, 0, 0),
description: 'These classes are lighthearted, athletic and fun all levels vinyasa flow classes. Join us and one of our skillful yoga teachers for this class on Saturday mornings @ Crissy Field.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501266991/sat_morning_vinyasa_sxwchd.jpg',
ticket_price: 0,
ticket_quantity: 25
)

e19 = Event.create(
organizer_id: ravi.id,
title: 'LAToken Penthouse Party',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'Meet blockchain entrepreneurs and investors, network and discover. Learn about tokenization and the opportunities it unlocks. Introductions, wine, food, blockchain and everything crypto. Hosted by LAToken founder Valentin Preobrazhensky. co-hosted by Gil Penchina. Event starts 19:30. Please contact hosts for RSVP and info or eli@latoken.com.
www.latoken.com',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501267278/la_penthouseparty_crkx95.png',
ticket_price: 0,
ticket_quantity: 25
)

e20 = Event.create(
organizer_id: jared.id,
title: 'SF Cuddles - Daytime Cuddle Party! August 26th 2017',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'DESCRIPTION
What is a Cuddle Party?
Cuddle Party is a 3-4 hours workshop experience where participants engage in communication exercises, explore touch in a non-sexual space, experience personal exploration and intimacy, and have fun with like minded people.

Why is Cuddling important?
Nurturing and consensual loving touch is good for maintaining a healthy life, a strong nervous system and a balanced emotional state. One’s ability to connect with and develop greater trust in others is emphasized during the group exchanges during Cuddle Parties. Self-care is a cornerstone of the Cuddle Party experience.',

image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501267697/cuddleparty_vtuqz4.jpg',
ticket_price: 0,
ticket_quantity: 25
)

e21 = Event.create(
organizer_id: syrie.id,
title: 'LAToken Penthouse Party',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'Meet blockchain entrepreneurs and investors, network and discover. Learn about tokenization and the opportunities it unlocks. Introductions, wine, food, blockchain and everything crypto. Hosted by LAToken founder Valentin Preobrazhensky. co-hosted by Gil Penchina. Event starts 19:30. Please contact hosts for RSVP and info or eli@latoken.com.
www.latoken.com',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501267278/la_penthouseparty_crkx95.png',
ticket_price: 0,
ticket_quantity: 25
)

e22 = Event.create(
organizer_id: isak.id,
title: '6th Annual Circus Festival',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'The Bayview Opera House (BVOH) in collaboration with NOW Hunters Point are proud to present Bayview Hunters Point’s 6th annual Summer Circus Festival. Doors to this free family-friendly event will open at 12pm. Event goers will be able to enjoy a myriad of activities from hobnobbing with stilt walkers and eating treats from local vendors: Old Skool Cafe and Yvonnes Southern Sweets. Children will have a blast riding the giant Fun Slide, riding a curcus train, playing circus games and more.
All rides and activities are free, bring cash for food.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501268103/circusfest_gfps8y.jpg',
ticket_price: 0,
ticket_quantity: 25
)

e23 = Event.create(
organizer_id: guest.id,
title: 'Hofbrauhaus Munich Saturdays',
location: 'Social Hall SF, San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'We are celebrating our 124 years in San Francisco by kicking off our very first Hofbrauhaus Party!
Bottomless Beer? YES!
German Attire? YES! We encourage you to wear Liderhosen and Dirndls
Beer Hall Games? YES! Beer chugging, Stein Holding and even Sausage Eating Contest
Sausages? OF COURSE! We will be offering all of our hits (Schnitzels, Pretzels and Sausages) and also a prefix menu for larger parties.
PROST!!',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501268539/hofbrauhaus_gxpkgv.jpg',
ticket_price: 0,
ticket_quantity: 25
)

e24 = Event.create(
organizer_id: isak.id,
title: 'SF Cheese Fest',
location: 'San Francisco, CA',
date_time: DateTime.new(2017, 7, 31, 10, 0, 0),
description: 'Calling all CHEESE lovers! We are "Melting Together" for the Third Annual SF Cheese Fest, which will celebrate the gratifying warmth of bringing folks together to share the cheesy richness of artisan cheeses and the people who create them. Mingle with 24 Guild-member cheesemakers from across the state, sampling dozens of new and classic California cheeses.',
image_url: 'http://res.cloudinary.com/dtluc0y85/image/upload/v1501268403/cheesefest_xrkiei.jpg',
ticket_price: 0,
ticket_quantity: 25
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



Bookmark.destroy_all
Bookmark.create(
  event_id: e8.id,
  user_id: guest.id
)
Bookmark.create(
  event_id: e6.id,
  user_id: noah.id
)
Bookmark.create(
  event_id: e5.id,
  user_id: aaron.id
)
Bookmark.create(
  event_id: e4.id,
  user_id: guest.id
)
