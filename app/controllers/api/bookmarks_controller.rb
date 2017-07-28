class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id

    if @bookmark.save
      # find corresponding event and decrease bookmark amount
      @user = current_user
      render '/api/users/show'
    else
      render json: @bookmark.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  private
  def bookmark_params
    params.require(:bookmark).require(:event_id)
  end
end
