class EventReservationController < ApplicationController
  before_action :set_event_reservation, only: %i[ show update destroy ] 

  # GET /event_reservations
  def index
    @event_reservations = EventReservation.all

    render json: @event_reservations
  end

  # GET /event_reservations/1
  def show
    render json: @event_reservation
  end

  # POST /event_reservations
  def create
    @event_reservation = EventReservation.new(event_reservation_params)

    if @event_reservation.save
      render json: @event_reservation, status: 200, location: @event_reservation
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
