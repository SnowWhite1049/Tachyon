class CaseStudyCommentController < ApplicationController
  before_action :set_case_study_comment, only: %i[ show update destroy ] 

  # GET /case_study_comments
  def index
    @case_study_comments = UserDetail.all

    render json: @case_study_comments
  end

  # GET /case_study_comments/1
  def show
    render json: @case_study_comment
  end

  # POST /case_study_comments
  def create
    @case_study_comment = UserDetail.new(case_study_comment_params)

    if @case_study_comment.save
      render json: @case_study_comment, status: 200, location: @case_study_comment
    else
      render json: @case_study_comment.errors, status: 422
    end
  end

  # PATCH/PUT /case_study_comments/1
  def update
    if @case_study_comment.update(case_study_comment_params)
      render json: @case_study_comment
    else
      render json: @case_study_comment.errors, status: 422
    end
  end

  # DELETE /case_study_comments/1
  def destroy
    @case_study_comment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case_study_comment
      @case_study_comment = CaseStudyComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def case_study_comment_params
      # params.fetch(:user, {})
      params.require(:case_study_comment).permit!
    end
end
