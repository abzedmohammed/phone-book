class SessionsController < ApplicationController
    def create
        user = User.find_by(phone: params[:phone])
        if user&.authenticate(params[:password])
            # session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password!"}, status: :unauthorized
        end
    end
end
