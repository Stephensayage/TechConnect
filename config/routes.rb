Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :posts
  resources :users

  post '/auth/login', to: 'auth#login'
  get '/auth/verify', to: 'auth#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
