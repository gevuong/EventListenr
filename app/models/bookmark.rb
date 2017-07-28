class Bookmark < ApplicationRecord
  validates :event_id, :user_id, presence: true
  validates :event_id, uniqueness: { scope: :user_id, message: "User can only bookmark once per event" }
  
  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
