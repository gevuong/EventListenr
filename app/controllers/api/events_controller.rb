class Api::EventsController < ApplicationController
  def new
    @event = Event.new
    render :new
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.save
      render '/api/events/show'
    else
      render json: @event.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def index
    @events = Event.all
    render :index
  end

# .find returns a 404 error
# .find_by returns a nil value if it is not found, and your program continues to function without exception
  def update
    @event = Event.find(params[:id])

    if @event.organizer_id === current_user.id
      if @event.update(event_params)
        render 'api/events/show'
      else
        render json: @event.errors.full_messages, status: 422 # unprocesssable entity
      end
      render json: ["This event does not belong to you"]
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event
      @event.destroy
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end
end

private
def event_params
  params.require(:event)
  .permit(:title, :description, :location, :date_time, :image_url, :ticket_price, :ticket_quantity, :organizer_id, category_id: [])
end
