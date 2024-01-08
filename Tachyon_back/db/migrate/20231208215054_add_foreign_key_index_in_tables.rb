class AddForeignKeyIndexInTables < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :users, :mentors
    add_foreign_key :users, :plans
  end
end
