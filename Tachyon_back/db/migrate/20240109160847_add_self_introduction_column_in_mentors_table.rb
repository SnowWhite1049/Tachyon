class AddSelfIntroductionColumnInMentorsTable < ActiveRecord::Migration[7.1]
  def change
    add_column :mentors, :self_introduction, :text, after: :timerex_s_url
  end
end
