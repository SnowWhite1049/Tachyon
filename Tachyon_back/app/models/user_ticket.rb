class UserTicket < ApplicationRecord
  belongs_to :user

  validates :user_id, presence:true
  validates :es_ticket_number, presence:true
  validates :case_ticket_number, presence:true
  validates :event_ticket_number, presence:true
  validates :short_interview_ticket_number, presence:true
  validates :interview_ticket_number, presence:true
end
