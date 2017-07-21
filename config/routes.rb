Rails.application.routes.draw do
  get 'events/new'

  get 'events/show'

  get 'events/index'

  get 'events/edit'

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
