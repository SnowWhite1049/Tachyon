class Company < ApplicationRecord
  has_many :job_categories
  has_many :events
  has_many :case_studies
  has_many :selection_statuses
  has_many :interview_experiences
  has_many :industries
  belongs_to :industry

  validates :industry_id, presence:true
  validates :name, length: { maximum: 50 }, presence:true
  validates :overview, presence:true
  validates :logo_path, length: { maximum: 255 }
end
