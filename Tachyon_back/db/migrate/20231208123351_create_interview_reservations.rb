class CreateInterviewReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :interview_reservations do |t|
      t.bigint :user_id, null: false
      t.bigint :mentor_id, null: false
      t.integer :category, null: false
      t.integer :status, null: false
      t.datetime :interview_date, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
