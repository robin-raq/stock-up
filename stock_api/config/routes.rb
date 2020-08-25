Rails.application.routes.draw do
  resources :holdings
  resources :transactions
  resources :users
  post '/signup', to: 'users#create'
  post '/login', to: 'auth#login'
  get '/profile', to: 'users#profile'
end
