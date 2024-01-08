class CreateUserTickets < ActiveRecord::Migration[7.1]
  def change
    create_table :user_tickets do |t|
      t.bigint :user_id, null: false
      t.integer :es_ticket_number, null: false
      t.integer :case_ticket_number, null: false
      t.integer :event_ticket_number, null: false
      t.integer :short_interview_ticket_number, null: false
      t.integer :interview_ticket_number, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
