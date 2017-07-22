class Event < ApplicationRecord
  validates :title, :description, :location, :date_time, :ticket_price, :ticket_quantity, presence: true

  belongs_to :organizer,
  class_name: :User,
  foreign_key: :organizer_id
  # belongs_to :category
  # has_many :tickets
end
