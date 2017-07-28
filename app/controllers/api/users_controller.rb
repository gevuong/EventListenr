class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show' # renders show.json.jbuilder
    else
      render json: @user.errors.full_messages, status: 422
      #status code: unprocessable entity
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
    # params format: {user: { username: "george", password: "password"} }
  end
end
