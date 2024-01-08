class UserTicketController < ApplicationController
  before_action :set_user_ticket, only: %i[ show update destroy ] 

  # GET /user_tickets
  def index
    @user_tickets = UserTicket.all

    render json: @user_tickets
  end

  # GET /user_tickets/1
  def show
    render json: @user_ticket
  end

  # POST /user_tickets
  def create
    @user_ticket = UserTicket.new(user_ticket_params)

    if @user_ticket.save
      render json: @user_ticket, status: 200, location: @user_ticket
    else
      render json: @user_ticket.errors, status: 422
    end
  end

  # PATCH/PUT /user_tickets/1
  def update
    if @user_ticket.update(user_ticket_params)
      render json: @user_ticket
    else
      render json: @user_ticket.errors, status: 422
    end
  end

  # DELETE /user_tickets/1
  def destroy
    @user_ticket.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_ticket
      @user_ticket = UserTicket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_ticket_params
      # params.fetch(:user, {})
      params.require(:user_ticket).permit!
    end
end
