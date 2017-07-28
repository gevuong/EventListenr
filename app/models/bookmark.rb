class Bookmark < ApplicationRecord
  validates :event_id, :user_id, presence: true, uniqueness: true

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :user

end
