class UserController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ] 
  before_action :authenticate_request!, only:%i[show apply_mentor]

  def register
    if params[:password] != params[:password_confirm]
      render json:{ error: 'パスワードが一致しません。'}, status: 401
    else
      @user=User.find_by(email:params[:email])
      if @user
        render json:{ error: 'ユーザーはすでに存在しています。'}, status: 401
      else 
        @user=User.new({
          mentor_id:params[:mentor_id],
          plan_id:params[:plan_id],
          email:params[:email],
          password:params[:password],
          first_name:params[:first_name],
          last_name:params[:last_name],
          birth_date:params[:birth_date],
          gender:params[:gender],
          status:params[:status],
        })
        if @user.save
          render json: {status: 200, info: payload(@user)}
        else
          render json: {status: 422, errors: @user.errors}
        end
      end
    end
  end

  def login
    begin 
      @user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
      
      if @user
        # render json: {status: 200, data: payload(@user)}
        render json:  payload(@user), status: 200
      else
        render json:  {error: 'メールやパスワードが正しくありません。'}, status: 401
      end
    rescue => error
      render json: {error: 'サーバーエラー。'}, status: 500
    end
  end

  def refresh_token
    begin 
      if request.cookies?.jwt
        refresh_token = request.cookies.jwt
        if JsonWebToken.decode(refresh_token) && JsonWebToken.decode(refresh_token).user_id
          puts JsonWebToken.decode(refresh_token)
        else
          render json: { status: 406, error: '認証エラー'}
        end
      else
        render json: {status: 406, error: '認証エラー'}
      end
    rescue => error
      render json: { error: 'サーバーエラー。'}, status: 500
    end
  end

  # GET /users
  def index
    begin
      @users = User.all      
      render json: @users.to_json(
        include: [
          :user_detail,
          :user_tickets => {only: [:es_ticket_number, :case_ticket_number, :event_ticket_number, :short_interview_ticket_number, :interview_ticket_number]},
          :mentor => {only: [:user_name]},
          :plan => {only: [:name]}
        ],
        except: [
          :email,
          :password_digest,
          :birth_date,
          :gender,
          :status,
          :created_at,
          :updated_at,
          :deleted_at
        ]
      ), status: 200
    rescue => error
      render json: { error: 'サーバーエラー。'}, status: 500
    end
  end

  def apply_mentor
    begin
      @user = User.find(current_user.id)
      
      if @user
        @user.mentor_id = params[:mentor_id]
        @user.save
        render json: 'success', status: 200
      else
        render json: { error: 'リソースが存在しません'}, status: 404
      end
    rescue => error
      render json: { error: 'サーバーエラー。'}, status: 500
    end
  end

  # GET /users/1
  def show
    begin
      if @user
        render json: @user.to_json(
          include: [
            :user_detail, :user_tickets,
            :mentor => {only: [:user_name]},
            :plan => {only: [:name]},
          ],
          except: [:created_at, :updated_at, :deleted_at]
          ), status:200
      else
        render json: { error: 'リソースが存在しません'}, status: 404
      end
    rescue => error
      render json: { error: 'サーバーエラー。'}, status: 500
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: 200, location: @user
    else
      render json: @user.errors, status: 422
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.includes(:mentor).find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:email, :password)
      # params.require(:email, :password).permit!
    end

    def payload(user)
      return nil unless user and user.id
      {
        auth_token: JsonWebToken.encode(
          {
            id: user.id, 
            email:user.email,
            exp:24.hours.from_now.to_i
          }
        ),
        expire_in: 24*3600,
        user: user.as_json(except: [:password_digest, :created_at, :updated_at, :deleted_at])
      }
    end

    def refresh(user)
      return nil unless user and user.id
      {
        refresh_token:JsonWebToken.encode({
          user_email:user.email,
          user_id: user.id, 
          exp:24.hours.from_now.to_i
        })
      }
    end
end
