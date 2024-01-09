class AddRatingFieldInEventsTable < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :rating, :float, after: :overview
  end
end
