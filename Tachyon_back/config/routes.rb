Rails.application.routes.draw do
  # resources :infos
  # resources :users
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api/v1' do
    post 'users/login', to: 'user#login'
    post 'users/register', to: 'user#register'
    post 'users/refresh_token', to: 'user#refresh_token'
    get 'users', to: 'user#index'
    get 'users/:id', to: 'user#show'
    put 'users/:id', to: 'user#update'
    delete 'users/:id', to: 'user#destroy'
    
    get 'user_tickets', to: 'user_ticket#index'
    get 'user_tickets/:id', to: 'user_ticket#show'
    post 'user_tickets', to: 'user_ticket#create'
    put 'user_tickets/:id', to: 'user_ticket#update'
    delete 'user_tickets/:id', to: 'user_ticket#destroy'

    get 'user_details', to: 'user_detail#index'
    get 'user_details/:id', to: 'user_detail#show'
    post 'user_details', to: 'user_detail#create'
    put 'user_details/:id', to: 'user_detail#update'
    delete 'user_details/:id', to: 'user_detail#destroy'

    get 'purchase_histories', to: 'purchase_history#index'
    get 'purchase_histories/download', to: 'purchase_history#download_pdf'
    get 'purchase_histories/:id', to: 'purchase_history#show'
    post 'purchase_histories', to: 'purchase_history#create'
    put 'purchase_histories/:id', to: 'purchase_history#update'
    delete 'purchase_histories/:id', to: 'purchase_history#destroy'

    post 'admins/login', to: 'admin#login'
    post 'admins/register', to: 'admin#register'
    get 'admins', to: 'admin#index'
    get 'admins/:id', to: 'admin#show'
    put 'admins/:id', to: 'admin#update'
    delete 'admins/:id', to: 'admin#destroy'

    post 'mentors/login', to: 'mentor#login'
    post 'mentors/register', to: 'mentor#register'
    get 'mentors', to: 'mentor#index'
    get 'mentors/:id', to: 'mentor#show'
    put 'mentors/:id', to: 'mentor#update'
    delete 'mentors/:id', to: 'mentor#destroy'

    get 'plans', to: 'plan#index'
    get 'plans/:id', to: 'plan#show'
    post 'plans', to: 'plan#create'
    put 'plans/:id', to: 'plan#update'
    delete 'plans/:id', to: 'plan#destroy'

    get 'companies', to: 'company#index'
    get 'companies/:id', to: 'company#show'
    post 'companies', to: 'company#create'
    put 'companies/:id', to: 'company#update'
    delete 'companies/:id', to: 'company#destroy'

    get 'job_categories', to: 'job_category#index'
    get 'job_categories/:id', to: 'job_category#show'
    post 'job_categories', to: 'job_category#create'
    put 'job_categories/:id', to: 'job_category#update'
    delete 'job_categories/:id', to: 'job_category#destroy'

    get 'industries', to: 'industry#index'
    get 'industries/:id', to: 'industry#show'
    post 'industries', to: 'industry#create'
    put 'industries/:id', to: 'industry#update'
    delete 'industries/:id', to: 'industry#destroy'

    get 'events', to: 'event#index'
    get 'events/:id', to: 'event#show'
    post 'events', to: 'event#create'
    put 'events/:id', to: 'event#update'
    delete 'events/:id', to: 'event#destroy'

    get 'entry_sheets', to: 'entry_sheet#index'
    get 'entry_sheets/:id', to: 'entry_sheet#show'
    post 'entry_sheets', to: 'entry_sheet#create'
    put 'entry_sheets/:id', to: 'entry_sheet#update'
    delete 'entry_sheets/:id', to: 'entry_sheet#destroy'

    get 'entry_sheet_comments', to: 'entry_sheet_comment#index'
    get 'entry_sheet_comments/:id', to: 'entry_sheet_comment#show'
    post 'entry_sheet_comments', to: 'entry_sheet_comment#create'
    put 'entry_sheet_comments/:id', to: 'entry_sheet_comment#update'
    delete 'entry_sheet_comments/:id', to: 'entry_sheet_comment#destroy'

    get 'entry_sheet_histories', to: 'entry_sheet_history#index'
    get 'entry_sheet_histories/:id', to: 'entry_sheet_history#show'
    post 'entry_sheet_histories', to: 'entry_sheet_history#create'
    put 'entry_sheet_histories/:id', to: 'entry_sheet_history#update'
    delete 'entry_sheet_histories/:id', to: 'entry_sheet_history#destroy'

    get 'case_studies', to: 'case_study#index'
    get 'case_studies/:id', to: 'case_study#show'
    post 'case_studies', to: 'case_study#create'
    put 'case_studies/:id', to: 'case_study#update'
    delete 'case_studies/:id', to: 'case_study#destroy'

    get 'case_study_comments', to: 'case_study_comment#index'
    get 'case_study_comments/:id', to: 'case_study_comment#show'
    post 'case_study_comments', to: 'case_study_comment#create'
    put 'case_study_comments/:id', to: 'case_study_comment#update'
    delete 'case_study_comments/:id', to: 'case_study_comment#destroy'

    get 'interview_reservations', to: 'interview_reservation#index'
    get 'interview_reservations/:id', to: 'interview_reservation#show'
    post 'interview_reservations', to: 'interview_reservation#create'
    put 'interview_reservations/:id', to: 'interview_reservation#update'
    delete 'interview_reservations/:id', to: 'interview_reservation#destroy'

    get 'event_reservations', to: 'event_reservation#index'
    get 'event_reservations/:id', to: 'event_reservation#show'
    post 'event_reservations', to: 'event_reservation#create'
    put 'event_reservations/:id', to: 'event_reservation#update'
    delete 'event_reservations/:id', to: 'event_reservation#destroy'

    get 'selection_statuses', to: 'selection_status#index'
    get 'selection_statuses/:id', to: 'selection_status#show'
    post 'selection_statuses', to: 'selection_status#create'
    put 'selection_statuses/:id', to: 'selection_status#update'
    delete 'selection_statuses/:id', to: 'selection_status#destroy'

    get 'interview_experiences', to: 'interview_experience#index'
    get 'interview_experiences/:id', to: 'interview_experience#show'
    post 'interview_experiences', to: 'interview_experience#create'
    put 'interview_experiences/:id', to: 'interview_experience#update'
    delete 'interview_experiences/:id', to: 'interview_experience#destroy'
  end
  root to: 'test#welcome'
end
