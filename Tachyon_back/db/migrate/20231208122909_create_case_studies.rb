class CreateCaseStudies < ActiveRecord::Migration[7.1]
  def change
    create_table :case_studies do |t|
      t.bigint :user_id, null: false
      t.bigint :company_id, null: false
      t.bigint :industry_id, null: false
      t.bigint :job_category_id, null: false
      t.string :question, limit: 255, null: false
      t.longtext :content, null: false
      t.integer :thinking_time, null: false
      t.integer :is_undisclosed, null: false
      t.integer :status, null: false
      t.longtext :correction_result
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
