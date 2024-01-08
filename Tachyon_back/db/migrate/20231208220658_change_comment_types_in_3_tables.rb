class ChangeCommentTypesIn3Tables < ActiveRecord::Migration[7.1]
  def change
    change_column :entry_sheet_comments, :comment, :text
    change_column :entry_sheet_histories, :comment, :text
    change_column :case_study_comments, :comment, :text
  end
end
