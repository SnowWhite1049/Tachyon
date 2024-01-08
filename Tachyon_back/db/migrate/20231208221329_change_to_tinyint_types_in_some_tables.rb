class ChangeToTinyintTypesInSomeTables < ActiveRecord::Migration[7.1]
  def change
    change_column :users, :gender, :integer, limit:1
    change_column :users, :status, :integer, limit:1
  end
end
