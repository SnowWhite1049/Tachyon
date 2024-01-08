class EventController < ApplicationController
  # before_action :set_event, only: %i[ show update destroy ] 

  # GET /events
  def index
    begin
      @events = Event.select(:id,:name, :image_path)
      render json: @events, status:200
    rescue => error
      render json: {error: 'サーバーエラー。', status: 500}
    end
  end

  # GET /events/1
  def show
    begin
      @event = Event.find(params[:id])
      if @event
        render json: @event.to_json(
          include: [:company=>{only: [:name, :logo_path]}],
          except: [ :created_at, :updated_at, :deleted_at]
          ), status:200
      else
        render json: {error: 'リソースが存在しません', status: 404}
      end
    rescue => error
      render json: {error: 'リソースが存在しません', status: 404}
    end
  end

  # POST /events
  def create
    file = params[:image]
    image_path = upload_file(file)
    @event = Event.new({
      company_id: params[:company_id],
      name: params[:name],
      overview: params[:overview],
      image_path: image_path,
      event_date:params[:event_date],
      event_url:params[:event_url],
      event_materials_url:params[:event_materials_url],
      event_type:params[:event_type]
    })

    if @event.save
      render json: @event, status: 200
    else
      render json: @event.errors, status: 422
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: 422
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      # params.fetch(:user, {})
      params.require(:event).permit!
    end

    def upload_file(file)
      # Define the specific path where you want to save the file
      ext = File.extname(file.original_filename)
      now=Time.now.strftime("%Y%m%d_%H%M%S")
      FileUtils.mkdir_p(Rails.root.join('public', 'uploads','events')) unless
      File.directory?(Rails.root.join('public', 'uploads','events'))
      specific_path = Rails.root.join('public', 'uploads','events', now+ext)

      # Save the file to the specific path
      File.open(specific_path, 'wb') do |f|
        f.write(file.read)
      end
      return specific_path.to_s.split("public/")[1]
    end
end
