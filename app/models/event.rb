class Event < ApplicationRecord
  validates :title, :description, :location, :date_time, :ticket_price, :ticket_quantity, presence: true

  belongs_to :user
  # belongs_to :category
  # has_many :tickets
end
