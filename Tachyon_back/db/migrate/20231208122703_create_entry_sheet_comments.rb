class CreateEntrySheetComments < ActiveRecord::Migration[7.1]
  def change
    create_table :entry_sheet_comments do |t|
      t.bigint :entry_sheet_id, null: false
      t.bigint :admin_id, null: false
      t.string :comment, limit: 255, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
