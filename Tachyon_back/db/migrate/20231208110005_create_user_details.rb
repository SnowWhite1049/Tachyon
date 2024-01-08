class CreateUserDetails < ActiveRecord::Migration[7.1]
  def change
    create_table :user_details do |t|
      t.bigint :user_id, null: false
      t.string :university, limit: 50, null: false
      t.string :faculty, limit: 50, null: false
      t.string :department, limit: 50, null: false
      t.integer :graduation_year, null: false
      t.string :first_wish_industry, limit: 50
      t.string :second_wish_industry, limit: 50
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
