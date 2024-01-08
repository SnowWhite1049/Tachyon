class ChangeToTinyintTypesInOtherTables < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :event_type, :integer, limit:1
    change_column :entry_sheets, :status, :integer, limit:1
    change_column :case_studies, :is_undisclosed, :integer, limit:1
    change_column :case_studies, :status, :integer, limit:1
    change_column :interview_reservations, :category, :integer, limit:1
    change_column :interview_reservations, :status, :integer, limit:1
    change_column :event_reservations, :status, :integer, limit:1
    change_column :selection_statuses, :status, :integer, limit:1
    change_column :interview_experiences, :status, :integer, limit:1
  end
end
