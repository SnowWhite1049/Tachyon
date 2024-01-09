class MentorController < ApplicationController
  before_action :set_mentor, only: %i[ update destroy ] 

  def register
    if params[:password] != params[:password_confirm]
      render json:{error: 'パスワードが一致しません。'}, status:401
    else
      @mentor=Mentor.find_by(email:params[:email])
      if @mentor
        render json:{error: 'ユーザーはすでに存在しています。'}, status:401
      else 
        @mentor=Mentor.new({
          email:params[:email],
          password:params[:password],
          first_name:params[:first_name],
          last_name:params[:last_name],
          user_name:params[:user_name],
          birth_date:params[:birth_date],
          gender:params[:gender],
          interview_salary:params[:interview_salary],
          lecture_create_salary:params[:lecture_create_salary],
          lecture_salary:params[:lecture_salary],
          university:params[:university],
          faculty:params[:faculty],
          graduation_year:params[:graduation_year],
          job_offer_1:params[:job_offer_1],
          job_offer_2:params[:job_offer_2],
          line_url:params[:line_url],
          timerex_l_url:params[:timerex_l_url],
          timerex_s_url:params[:timerex_s_url],
        })
        if @mentor.save
          render json: payload(@mentor), status:200
        else
          render json: {errors: @mentor.errors}, status: 422
        end
      end
    end
  end

  def login
    @mentor = Mentor.find_by(email: mentor_params[:email]).try(:authenticate, mentor_params[:password])
    if @mentor
      render json: payload(@mentor), status:200
    else
      render json: {error: 'メールやパスワードが正しくありません。', status: 401}
    end
  end
  # GET /mentors
  def index
    begin 
      # @mentors = Mentor.select(:id, :first_name, :last_name, :lecture_salary)
      @mentors = Mentor.select(Mentor.column_names - ['password_digest', 'created_at', 'updated_at', 'deleted_at'])
      render json: @mentors, status:200
    rescue => error
      render json: {status: 400, error: '無効なリクエストです。'}
    end
  end

  # GET /mentors/1
  def show
    begin
      @mentor = Mentor.select(Mentor.column_names - ['password_digest', 'created_at', 'updated_at', 'deleted_at']).find(params[:id])
      if @mentor
        render json: @mentor, status:200
      else
        render json: {error: 'リソースが存在しません'}, status: 404
      end
    rescue => error
      render json: {error: 'サーバーエラー。'}, status: 500
    end
  end

  # POST /mentors
  def create
    @mentor = Mentor.new(mentor_params)

    if @mentor.save
      render json: @mentor, status: 200, location: @mentor
    else
      render json: @mentor.errors, status: 422
    end
  end

  # PATCH/PUT /mentors/1
  def update
    if @mentor.update(mentor_params)
      render json: @mentor
    else
      render json: @mentor.errors, status: 422
    end
  end

  # DELETE /mentors/1
  def destroy
    @mentor.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mentor
      @mentor = Mentor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mentor_params
      # params.fetch(:mentor, {})
      params.require(:mentor).permit!
    end

    def payload(mentor)
      return nil unless mentor and mentor.id
      {
        auth_token: JsonWebToken.encode(
          {mentor_id: mentor.id, mentor_email:mentor.email}
        ),
        mentor: mentor.as_json(except: :password_digest)
      }
    end
end
