json.extract! user, :id, :username, :organized_events

json.tickets do
   user.tickets.each do |ticket|
     json.set! ticket.event_id, ticket.quantity
   end
end

json.bookmarks user.bookmarks.pluck(:event_id)
