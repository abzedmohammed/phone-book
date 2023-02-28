Rails.application.routes.draw do
  resources :contact_groups
  resources :contacts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  post "login", to: "articles#index"
end
