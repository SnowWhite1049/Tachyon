class InterviewReservationController < ApplicationController
  before_action :set_interview_reservation, only: %i[ show update destroy ] 

  # GET /interview_reservations
  def index
    @interview_reservations = InterviewReservation.all

    render json: @interview_reservations
  end

  # GET /interview_reservations/1
  def show
    render json: @interview_reservation
  end

  # POST /interview_reservations
  def create
    @interview_reservation = InterviewReservation.new(interview_reservation_params)

    if @interview_reservation.save
      render json: @interview_reservation, status: 200, location: @interview_reservation
    else
      render json: @interview_reservation.errors, status: 422
    end
  end

  # PATCH/PUT /interview_reservations/1
  def update
    if @interview_reservation.update(interview_reservation_params)
      render json: @interview_reservation
    else
      render json: @interview_reservation.errors, status: 422
    end
  end

  # DELETE /interview_reservations/1
  def destroy
    @interview_reservation.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interview_reservation
      @interview_reservation = InterviewReservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def interview_reservation_params
      # params.fetch(:user, {})
      params.require(:interview_reservation).permit!
    end
end
