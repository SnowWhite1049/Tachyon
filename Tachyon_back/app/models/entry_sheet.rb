class EntrySheet < ApplicationRecord
  has_many :entry_sheet_comments
  has_many :entry_sheet_histories
  belongs_to :user

  validates :user_id, presence:true, 
  validates :company_name, length: { maximum: 50 }, presence:true
  validates :industry_name, length: { maximum: 50 }, presence:true
  validates :content, presence:true
  validates :status, presence:true
end
