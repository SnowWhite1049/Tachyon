class CustomizeMentorsTable < ActiveRecord::Migration[7.1]
  def change
    rename_column :mentors, :timerex_url, :timerex_l_url
    rename_column :mentors, :timerex_url_short, :timerex_s_url
    add_column :mentors, :birth_date, :date, after: :last_name
    add_column :mentors, :gender, :integer, limit:1, after: :birth_date
    add_column :mentors, :university, :string, limit:255, after: :lecture_salary
    add_column :mentors, :faculty, :string, limit:255, after: :university
    add_column :mentors, :graduation_year, :integer, after: :faculty
    add_column :mentors, :job_offer_1, :string, after: :graduation_year, limit:255
    add_column :mentors, :job_offer_2, :string, after: :job_offer_1, limit:255
  end
end
