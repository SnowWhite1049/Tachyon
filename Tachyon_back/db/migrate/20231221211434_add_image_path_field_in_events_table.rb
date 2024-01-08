class AddImagePathFieldInEventsTable < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :image_path, :string, limit:255, after: :name
  end
end
