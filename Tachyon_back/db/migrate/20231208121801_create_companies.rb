class CreateCompanies < ActiveRecord::Migration[7.1]
  def change
    create_table :companies do |t|
      t.bigint :industry_id, null: false
      t.string :name, limit: 50, null: false
      t.text :overview, null: false
      t.string :logo_path, limit:255
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
