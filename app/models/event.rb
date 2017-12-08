# == Schema Information
#
# Table name: events
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  location        :string           not null
#  description     :string           not null
#  date_time       :datetime         not null
#  image_url       :string           not null
#  ticket_price    :integer          not null
#  ticket_quantity :integer          not null
#  organizer_id    :integer          not null
#  category_id     :integer          default([]), is an Array
#

class Event < ApplicationRecord
  validates :title, :location, :description, :date_time, :image_url, :ticket_price, :ticket_quantity, :organizer_id, presence: true

  belongs_to :organizer,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :User

  has_many :tickets
  has_one :bookmarks
end
