class AddDateColummsInCaseStudiesTable < ActiveRecord::Migration[7.1]
  def change
    add_column :case_studies, :start_date, :date, after: :status
    add_column :case_studies, :end_date, :date, after: :start_date
  end
end
