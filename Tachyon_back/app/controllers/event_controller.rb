class EventController < ApplicationController
  # before_action :set_event, only: %i[ show update destroy ] 

  # GET /events
  def index
    begin
      first_day = Date.current.beginning_of_week
      after_week = first_day + 7.days

      @events = Event.select(:id, :image_path, :name, :event_date, :rating).where(event_date: first_day..after_week).order(event_date: :asc)
      
      events = Hash.new([])
      for event in @events
        weekday_number = event.event_date.wday
        weekday = Date::DAYNAMES[weekday_number]
        events[weekday] = events[weekday] + [event]
      end

      render json: events, status:200

    rescue => error

      render json: {error: 'サーバーエラー。'}, status: 500
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
    image_file = params[:image]
    material_file = params[:material]
    image_path = upload_file(image_file, 'event')
    materials_path = upload_file(material_file, 'material')
    @event = Event.new({
      company_id: params[:company_id],
      name: params[:name],
      overview: params[:overview],
      image_path: image_path,
      materials_path: materials_path,
      event_date:params[:event_date],
      start_time:params[:start_time],
      end_time:params[:end_time],
      event_type:params[:event_type],
      open_chat_url:params[:open_chat_url],
      zoom_url:params[:zoom_url],
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

    def upload_file(file, category)
      # Define the specific path where you want to save the file
      ext = File.extname(file.original_filename)
      now=Time.now.strftime("%Y%m%d_%H%M%S")
      FileUtils.mkdir_p(Rails.root.join('public', 'uploads','events')) unless
      File.directory?(Rails.root.join('public', 'uploads','events'))
      specific_path = Rails.root.join('public', 'uploads','events', category+'_'+now+ext)

      # Save the file to the specific path
      File.open(specific_path, 'wb') do |f|
        f.write(file.read)
      end
      return specific_path.to_s.split("public/")[1]
    end
end
