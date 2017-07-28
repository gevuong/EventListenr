class Api::TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.user_id = current_user.id
    # ticket.event_id.find, subtract off quantity and save it
    if @ticket.save
      # find corresponding event and decrease ticket amount
      @user = current_user
      render '/api/users/show'
    else
      render json: @ticket.errors.full_messages, status: 422 # unprocessable entity
    end
  end


  private
  def ticket_params
    params.require(:ticket).permit(:quantity, :event_id)
  end

end
