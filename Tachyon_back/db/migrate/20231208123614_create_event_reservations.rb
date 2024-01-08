class CreateEventReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :event_reservations do |t|
      t.bigint :user_id, null: false
      t.bigint :event_id, null: false
      t.integer :status, null: false
      t.datetime :fixed_date, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
