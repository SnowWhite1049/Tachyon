class CreatePurchaseHistories < ActiveRecord::Migration[7.1]
  def change
    create_table :purchase_histories do |t|
      t.bigint :user_id, null: false
      t.integer :price, null: false
      t.string :name, limit: 50, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
