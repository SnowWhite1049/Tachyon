# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_01_07_093450) do
  create_table "admins", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "user_name", null: false
    t.string "first_name", limit: 50
    t.string "last_name", limit: 50
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
  end

  create_table "case_studies", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.bigint "industry_id", null: false
    t.bigint "job_category_id", null: false
    t.string "question", null: false
    t.text "content", size: :long, null: false
    t.integer "thinking_time", null: false
    t.integer "is_undisclosed", limit: 1, null: false
    t.integer "status", limit: 1, null: false
    t.date "start_date"
    t.date "end_date"
    t.text "correction_result", size: :long
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["company_id"], name: "fk_rails_a41d370fab"
    t.index ["industry_id"], name: "fk_rails_6b8c105369"
    t.index ["job_category_id"], name: "fk_rails_1c3b1eb51e"
    t.index ["user_id"], name: "fk_rails_76bb1f0eb5"
  end

  create_table "case_study_comments", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "case_study_id", null: false
    t.bigint "admin_id", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["admin_id"], name: "fk_rails_dfb63c4cf3"
    t.index ["case_study_id"], name: "fk_rails_5efea0602e"
  end

  create_table "companies", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "industry_id", null: false
    t.string "name", limit: 50, null: false
    t.text "overview", null: false
    t.string "logo_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["industry_id"], name: "fk_rails_81ca530391"
  end

  create_table "entry_sheet_comments", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "entry_sheet_id", null: false
    t.bigint "admin_id", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["admin_id"], name: "fk_rails_df06adab22"
    t.index ["entry_sheet_id"], name: "fk_rails_da4da5b574"
  end

  create_table "entry_sheet_histories", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "entry_sheet_id", null: false
    t.bigint "admin_id", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["admin_id"], name: "fk_rails_33880db2da"
    t.index ["entry_sheet_id"], name: "fk_rails_21e2617dcc"
  end

  create_table "entry_sheets", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "company_name", limit: 50, null: false
    t.string "industry_name", limit: 50, null: false
    t.text "content", size: :long, null: false
    t.integer "status", limit: 1, null: false
    t.text "correction_result", size: :long
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["user_id"], name: "fk_rails_7f2f9b9836"
  end

  create_table "event_reservations", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.integer "status", limit: 1, null: false
    t.datetime "fixed_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["event_id"], name: "fk_rails_50280daace"
    t.index ["user_id"], name: "fk_rails_65988806ff"
  end

  create_table "events", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "name", limit: 50, null: false
    t.string "image_path"
    t.text "overview", null: false
    t.datetime "event_date", null: false
    t.string "event_url", null: false
    t.string "event_materials_url", null: false
    t.integer "event_type", limit: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["company_id"], name: "fk_rails_88786fdf2d"
  end

  create_table "industries", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "name", limit: 50, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
  end

  create_table "interview_experiences", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.bigint "job_category_id", null: false
    t.integer "status", limit: 1, null: false
    t.text "content"
    t.text "impression"
    t.integer "interview_time"
    t.integer "interviewer_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["company_id"], name: "fk_rails_c546fffb17"
    t.index ["job_category_id"], name: "fk_rails_c881643781"
    t.index ["user_id"], name: "fk_rails_546ebc486d"
  end

  create_table "interview_reservations", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "mentor_id", null: false
    t.integer "category", limit: 1, null: false
    t.integer "status", limit: 1, null: false
    t.datetime "interview_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["mentor_id"], name: "fk_rails_df5a6e4384"
    t.index ["user_id"], name: "fk_rails_a9cfcd1b8c"
  end

  create_table "job_categories", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "name", limit: 50, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["company_id"], name: "fk_rails_e875ae923d"
  end

  create_table "mentors", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "user_name", null: false
    t.string "first_name", limit: 50
    t.string "last_name", limit: 50
    t.integer "interview_salary", null: false
    t.integer "lecture_create_salary"
    t.integer "lecture_salary"
    t.string "line_url", null: false
    t.string "timerex_url"
    t.string "timerex_url_short"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
  end

  create_table "plans", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "name", limit: 50, null: false
    t.integer "price", null: false
    t.integer "es_ticket_number", null: false
    t.integer "case_ticket_number"
    t.integer "event_ticket_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
  end

  create_table "purchase_histories", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "price", null: false
    t.string "name", limit: 50, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["user_id"], name: "fk_rails_72adc47b72"
  end

  create_table "selection_statuses", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.integer "status", limit: 1, null: false
    t.datetime "selection_date", null: false
    t.integer "ranking", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["company_id"], name: "fk_rails_ed004b5ed0"
    t.index ["user_id"], name: "fk_rails_559b9fe5bb"
  end

  create_table "user_details", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "university", limit: 50, null: false
    t.string "faculty", limit: 50, null: false
    t.string "department", limit: 50, null: false
    t.integer "graduation_year", null: false
    t.string "first_wish_industry", limit: 50
    t.string "second_wish_industry", limit: 50
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["user_id"], name: "fk_rails_12e0b3043d"
  end

  create_table "user_tickets", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "es_ticket_number", null: false
    t.integer "case_ticket_number", null: false
    t.integer "event_ticket_number", null: false
    t.integer "short_interview_ticket_number", null: false
    t.integer "interview_ticket_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["user_id"], name: "fk_rails_a123431d98"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "mentor_id", null: false
    t.bigint "plan_id", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "first_name", limit: 50, null: false
    t.string "last_name", limit: 50, null: false
    t.date "birth_date", null: false
    t.integer "gender", limit: 1, null: false
    t.integer "status", limit: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.timestamp "deleted_at"
    t.index ["mentor_id"], name: "fk_rails_a3d31e0a9f"
    t.index ["plan_id"], name: "fk_rails_c7d01481e8"
  end

  add_foreign_key "case_studies", "companies"
  add_foreign_key "case_studies", "industries"
  add_foreign_key "case_studies", "job_categories"
  add_foreign_key "case_studies", "users"
  add_foreign_key "case_study_comments", "admins"
  add_foreign_key "case_study_comments", "case_studies"
  add_foreign_key "companies", "industries"
  add_foreign_key "entry_sheet_comments", "admins"
  add_foreign_key "entry_sheet_comments", "entry_sheets"
  add_foreign_key "entry_sheet_histories", "admins"
  add_foreign_key "entry_sheet_histories", "entry_sheets"
  add_foreign_key "entry_sheets", "users"
  add_foreign_key "event_reservations", "events"
  add_foreign_key "event_reservations", "users"
  add_foreign_key "events", "companies"
  add_foreign_key "interview_experiences", "companies"
  add_foreign_key "interview_experiences", "job_categories"
  add_foreign_key "interview_experiences", "users"
  add_foreign_key "interview_reservations", "mentors"
  add_foreign_key "interview_reservations", "users"
  add_foreign_key "job_categories", "companies"
  add_foreign_key "purchase_histories", "users"
  add_foreign_key "selection_statuses", "companies"
  add_foreign_key "selection_statuses", "users"
  add_foreign_key "user_details", "users"
  add_foreign_key "user_tickets", "users"
  add_foreign_key "users", "mentors"
  add_foreign_key "users", "plans"
end
