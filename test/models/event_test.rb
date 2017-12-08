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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
