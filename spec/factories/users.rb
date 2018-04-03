
FactoryBot.define do
  factory :user do
    # username "George"
    # password "password"
    username { |n| Faker::Internet.name }
    password { |p| Faker::Internet.password }
  end
end
