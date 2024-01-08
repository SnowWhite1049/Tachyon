class CreateMentors < ActiveRecord::Migration[7.1]
  def change
    create_table :mentors do |t|
      t.string :email, limit: 255, null: false
      t.string :password_digest, limit: 255, null: false
      t.string :user_name, limit: 255, null: false
      t.string :first_name, limit: 50
      t.string :last_name, limit: 50
      t.integer :interview_salary, null: false
      t.integer :lecture_create_salary
      t.integer :lecture_salary
      t.string :line_url, limit: 255, null: false
      t.string :timerex_url, limit: 255
      t.string :timerex_url_short, limit: 255
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end
