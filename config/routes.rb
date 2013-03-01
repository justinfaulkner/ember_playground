Owners::Application.routes.draw do
  resources :foods


  resources :tab_items


  resources :tabs


  resources :tables


  root :to => 'application#index'
  match "/*path" => "application#index"
end
