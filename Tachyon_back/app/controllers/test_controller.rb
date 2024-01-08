class TestController < ApplicationController
  def welcome
    render json: 'welcome', status: 200
  end
end
