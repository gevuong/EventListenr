class Event < ApplicationRecord
  validates :title, :description, :location, :date_time, :ticket_price, :organizer_id, :ticket_quantity, presence: true

  belongs_to :organizer,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :User

  has_many :tickets
  has_one :bookmarks
end
