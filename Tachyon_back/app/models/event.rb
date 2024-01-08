class Event < ApplicationRecord
  has_many :event_reservations
  belongs_to :company

  validates :company_id, presence:true
  validates :name, length: { maximum: 50 }, presence:true
  validates :overview, presence:true
  validates :event_date, presence:true
  validates :event_url, length: { maximum: 255 }, presence:true
  validates :event_materials_url, length: { maximum: 255 }, presence:true
  validates :event_type, presence:true
end
