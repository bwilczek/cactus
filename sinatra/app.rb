require 'sinatra'
require 'json'


get '/session' do
  content_type :json
  { token: '123321123321' }.to_json
end
