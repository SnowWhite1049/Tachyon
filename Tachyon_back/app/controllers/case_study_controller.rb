class CaseStudyController < ApplicationController
  before_action :set_case_study, only: %i[ show update destroy ] 
  before_action :authenticate_request!, only: %i[ create ] 

  # GET /case_studies
  def index
    begin 
      @case_studies = CaseStudy.all
      render json:@case_studies.to_json(except: [ :created_at, :updated_at, :deleted_at]), status:200
    rescue => error
      render json: {error: 'リクエストが不正です。', status: 400}
    end
  end

  # GET /case_studies/1
  def show
    render json: @case_study
  end

  # POST /case_studies
  def create
    # puts current_user.id
    case_study_params["industry_id"] = 1
    case_study_params["job_category_id"] = 1
    case_study_params["user_id"] = current_user.id
    # is_undisclosed = 1 draft # 0 public
    case_study_params["is_undisclosed"] = 1
    # 
    case_study_params["status"] = 1
    
    @case_study = CaseStudy.new(case_study_params)

    if @case_study.save
      render json: @case_study, status: 200
    else
      render json: @case_study.errors, status: 422
    end
  end

  # PATCH/PUT /case_studies/1
  def update
    if @case_study.update(case_study_params)
      render json: @case_study
    else
      render json: @case_study.errors, status: 422
    end
  end

  # DELETE /case_studies/1
  def destroy
    @case_study.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case_study
      @case_study = CaseStudy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def case_study_params
      # params.fetch(:user, {})
      params.require(:case_study).permit!
    end
end
