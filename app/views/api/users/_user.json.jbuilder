json.extract! user, :id, :username

json.tickets do
   user.tickets.each do |ticket|
     json.set! ticket.event_id, ticket.quantity
   end
end
