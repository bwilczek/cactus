require 'sinatra'
require 'json'


get '/session' do
  content_type :json
  { token: SecureRandom.hex }.to_json
end
