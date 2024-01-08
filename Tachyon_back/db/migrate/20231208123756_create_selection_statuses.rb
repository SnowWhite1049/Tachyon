class CreateSelectionStatuses < ActiveRecord::Migration[7.1]
  def change
    create_table :selection_statuses do |t|
      t.bigint :user_id, null: false
      t.bigint :company_id, null: false
      t.integer :status, null: false
      t.datetime :selection_date, null: false
      t.integer :ranking, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
