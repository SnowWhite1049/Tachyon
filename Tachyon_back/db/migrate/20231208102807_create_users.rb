class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.bigint :mentor_id, null: false
      t.bigint :plan_id, null: false
      t.string :email, limit: 255, null: false
      t.string :password_digest, limit: 255, null: false
      t.string :first_name, limit: 50, null: false
      t.string :last_name, limit: 50, null: false
      t.date :birth_date, null: false
      t.integer :gender, null:false
      t.integer :status, null:false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
