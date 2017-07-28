json.extract! @user, :id, :username

json.tickets do
   @user.tickets.each do |ticket|
     json.set! ticket.event_id, ticket.quantity
   end
end

json.bookmarks(@user.bookmarks) do |bookmark|
  bookmark.event_id
end
