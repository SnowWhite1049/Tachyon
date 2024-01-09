class EventReservationController < ApplicationController
  before_action :set_event_reservation, only: %i[ show update destroy ] 
  before_action :authenticate_request!, only: %i[ create user_reservations] 
  # GET /event_reservations
  def index
    @event_reservations = EventReservation.all

    render json: @event_reservations
  end

  def user_reservations
    begin 
          
      today = Date.today
      ten_days_later = today + 10.days

      @event_reservations = EventReservation.select(:user_id, :event_id).where(user_id: current_user.id)
      
      ids = []
      for er in @event_reservations
        ids.push(er.event_id)
      end
      
      @events = Event.select(:id, :image_path, :name, :event_date, :start_time, :end_time, :zoom_url, :open_chat_url, :rating)
                            .where(id: ids, event_date: today..ten_days_later ).order(event_date: :asc)

      render json: @events, status: 200
    
    rescue => error
      puts error
      render json: {error: 'サーバーエラー。'}, status: 500
    end
  end

  # GET /event_reservations/1
  def show
    render json: @event_reservation
  end

  # POST /event_reservations
  def create
    @event_reservation = EventReservation.new({
      user_id: current_user.id,
      event_id: params[:event_id],
      status: 3,
      fixed_date: params[:fixed_date]
    })

    if @event_reservation.save
      render json: @event_reservation, status: 200
    else
      render json: @event_reservation.errors, status: 422
    end
  end

  # PATCH/PUT /event_reservations/1
  def update
    if @event_reservation.update(event_reservation_params)
      render json: @event_reservation
    else
      render json: @event_reservation.errors, status: 422
    end
  end

  # DELETE /event_reservations/1
  def destroy
    @event_reservation.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_reservation
      @event_reservation = EventReservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_reservation_params
      # params.fetch(:user, {})
      params.require(:event_reservation).permit!
    end
end
