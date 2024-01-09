class CaseStudyComment < ApplicationRecord
  belongs_to :case_study
  belongs_to :admin

  validates :case_study_id, presence:true
  validates :admin_id, presence:true
  validates :comment, presence:true
end
