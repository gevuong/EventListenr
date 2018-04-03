require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject(:user) do
    FactoryBot.build(:user)
  end

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it "creates a password_digest when a password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session token before validation" do
      user.valid?
      expect(user.session_token).to_not be_nil
    end

    describe "#reset_session_token" do
      it "sets a new session token on the user" do
        user.valid?
        old_session_token = user.session_token
        user.reset_session_token

        # Miniscule chance this will fail.
        expect(user.session_token).to_not eq(old_session_token)
      end

      it "returns the new session token" do
        expect(user.reset_session_token).to eq(user.session_token)
      end
    end

    describe "#is_password?" do
      it "verifies a password is correct" do
        expect(user.is_password?(user.password)).to be true
      end

      it "verifies a password is not correct" do
        expect(user.is_password?("bad_password")).to be false
      end
    end

  describe ".find_by_credentials" do
      before { user.save! }

      it "returns user given good credentials" do
        expect(User.find_by_credentials(user.username, user.password)).to eq(user)
      end

      it "returns nil given bad credentials" do
        expect(User.find_by_credentials("username", "bad_password")).to eq(nil)
      end
    end

end
