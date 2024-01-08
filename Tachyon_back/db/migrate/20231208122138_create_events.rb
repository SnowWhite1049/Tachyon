class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.bigint :company_id, null: false
      t.string :name, limit: 50, null: false
      t.text :overview, null: false
      t.datetime :event_date, null: false
      t.string :event_url, limit: 255, null: false
      t.string :event_materials_url, limit: 255, null: false
      t.integer :event_type, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
