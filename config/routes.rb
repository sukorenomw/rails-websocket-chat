Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/acserver'

  root "chats#index"
  resources :messages
  post '/joined', to: "join#joined"
end
