class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id # 500 internal server error comes from here because current_user is nil if no one is signed in.

    if @bookmark.save
      # find corresponding event and decrease bookmark amount
      @user = current_user
      render '/api/users/show'
    else
      render json: @bookmark.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  def destroy
    bookmark = Bookmark.find_by(user_id: current_user.id, event_id: params[:event_id])

    bookmark.destroy
    @user = current_user
    render '/api/users/show'
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:event_id)
  end
end
