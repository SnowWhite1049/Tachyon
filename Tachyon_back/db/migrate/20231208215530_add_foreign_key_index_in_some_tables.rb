class AddForeignKeyIndexInSomeTables < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :user_tickets, :users
    add_foreign_key :user_details, :users
    add_foreign_key :purchase_histories, :users
    add_foreign_key :companies, :industries
    add_foreign_key :job_categories, :companies
    add_foreign_key :events, :companies
    add_foreign_key :entry_sheets, :users
    add_foreign_key :entry_sheet_comments, :entry_sheets
    add_foreign_key :entry_sheet_comments, :admins
    add_foreign_key :entry_sheet_histories, :entry_sheets
    add_foreign_key :entry_sheet_histories, :admins
    add_foreign_key :case_studies, :users
    add_foreign_key :case_studies, :companies
    add_foreign_key :case_studies, :industries
    add_foreign_key :case_studies, :job_categories
    add_foreign_key :case_study_comments, :case_studies
    add_foreign_key :case_study_comments, :admins
    add_foreign_key :interview_reservations, :users
    add_foreign_key :interview_reservations, :mentors
    add_foreign_key :event_reservations, :users
    add_foreign_key :event_reservations, :events
    add_foreign_key :selection_statuses, :users
    add_foreign_key :selection_statuses, :companies
    add_foreign_key :interview_experiences, :users
    add_foreign_key :interview_experiences, :companies
    add_foreign_key :interview_experiences, :job_categories
  end
end
