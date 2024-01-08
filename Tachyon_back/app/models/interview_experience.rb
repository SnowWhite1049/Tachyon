class InterviewExperience < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :job_category

  validates :user_id, presence:true
  validates :company_id, presence:true
  validates :job_category_id, presence:true
  validates :status, presence:true
end
