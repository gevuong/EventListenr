@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :description, :date_time, :image_url, :ticket_price, :ticket_quantity
  end
end
