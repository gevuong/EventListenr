class Api::UsersController < ApplicationController
  def create
    @user = User.find_by(user_params)

    if @user.save
      login(@user)
      render '/'
    else
      render json: @user.errors.full_messages, status: 422
      #status code: unprocessable entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
