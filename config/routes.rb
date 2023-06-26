# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  mount Lookbook::Engine, at: '/lookbook' if Rails.env.development?

  localized do
    devise_for :users
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
    root 'pages#home'
  end
  authenticate :user, ->(u) { u.has_role? :app_admin } do
    mount Sidekiq::Web => '/sidekiq'
  end
end
