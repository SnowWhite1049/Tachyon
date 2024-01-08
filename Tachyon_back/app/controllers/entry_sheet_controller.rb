class EntrySheetController < ApplicationController
  before_action :set_entry_sheet, only: %i[ show update destroy ] 

  # GET /entry_sheets
  def index
    @entry_sheets = EntrySheet.all

    render json: @entry_sheets
  end

  # GET /entry_sheets/1
  def show
    render json: @entry_sheet
  end

  # POST /entry_sheets
  def create
    @entry_sheet = EntrySheet.new(entry_sheet_params)

    if @entry_sheet.save
      render json: @entry_sheet, status: 200, location: @entry_sheet
    else
      render json: @entry_sheet.errors, status: 422
    end
  end

  # PATCH/PUT /entry_sheets/1
  def update
    if @entry_sheet.update(entry_sheet_params)
      render json: @entry_sheet
    else
      render json: @entry_sheet.errors, status: 422
    end
  end

  # DELETE /entry_sheets/1
  def destroy
    @entry_sheet.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry_sheet
      @entry_sheet = EntrySheet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def entry_sheet_params
      # params.fetch(:user, {})
      params.require(:entry_sheet).permit!
    end
end
