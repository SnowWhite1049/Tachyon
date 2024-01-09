class CustomizeEventsTable < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :event_date, :date
    add_column :events, :start_time, :time, after: :event_date
    add_column :events, :end_time, :time, after: :start_time
    add_column :events, :materials_path, :string, limit:255, after: :image_path, limit:255
    add_column :events, :open_chat_url, :string, after: :event_type, limit:255
    add_column :events, :zoom_url, :string, after: :open_chat_url, limit:255
    remove_column :events, :event_url
    remove_column :events, :event_materials_url
  end
end
