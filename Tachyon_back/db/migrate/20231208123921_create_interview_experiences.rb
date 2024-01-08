class CreateInterviewExperiences < ActiveRecord::Migration[7.1]
  def change
    create_table :interview_experiences do |t|
      t.bigint :user_id, null: false
      t.bigint :company_id, null: false
      t.bigint :job_category_id, null: false
      t.integer :status, null: false
      t.text :content
      t.text :impression
      t.integer :interview_time
      t.integer :interviewer_count
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
