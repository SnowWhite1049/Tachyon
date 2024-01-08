class CreateIndustries < ActiveRecord::Migration[7.1]
  def change
    create_table :industries do |t|
      t.string :name, limit: 50, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
