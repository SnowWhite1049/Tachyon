class CreatePlans < ActiveRecord::Migration[7.1]
  def change
    create_table :plans do |t|
      t.string :name, limit: 50, null: false
      t.integer :price, null: false
      t.integer :es_ticket_number, null: false
      t.integer :case_ticket_number
      t.integer :event_ticket_number
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
