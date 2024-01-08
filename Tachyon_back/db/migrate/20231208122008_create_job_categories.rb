class CreateJobCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :job_categories do |t|
      t.bigint :company_id, null: false
      t.string :name, limit: 50, null: false
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
