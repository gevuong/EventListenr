class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  

end
