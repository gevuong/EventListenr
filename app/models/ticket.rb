class Ticket < ApplicationRecord
  validates :event_id, :user_id, presence: true, uniqueness: true

  # custom validation to validate that the quantity is <= to remaining amount

  #
  # Event.find()

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
