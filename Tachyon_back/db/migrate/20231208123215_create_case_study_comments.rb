class CreateCaseStudyComments < ActiveRecord::Migration[7.1]
  def change
    create_table :case_study_comments do |t|
      t.bigint :case_study_id, null: false
      t.bigint :admin_id, null: false
      t.string :comment, limit: 255, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
