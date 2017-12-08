# == Schema Information
#
# Table name: tickets
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer          not null
#

class Ticket < ApplicationRecord
  validates :event_id, :user_id, presence: true

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
