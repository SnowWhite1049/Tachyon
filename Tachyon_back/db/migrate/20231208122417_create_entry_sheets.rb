class CreateEntrySheets < ActiveRecord::Migration[7.1]
  def change
    create_table :entry_sheets do |t|
      t.bigint :user_id, null: false
      t.string :company_name, limit: 50, null: false
      t.string :industry_name, limit: 50, null: false
      t.longtext :content, null: false
      t.integer :status, null: false
      t.longtext :correction_result
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
