class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_error
    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)

        if user.valid?
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity        
        end
    end

    def show
       user = User.find_by(id: params[:id]) 
       if user 
           render json: user, status: :ok
        else
            render json: {error: "Couldn't find User with id <=#{params["id"]}=>"}, status: :unprocessable_entity
       end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update!(user_params)
            if user.valid?
                render json: user, status: :accepted
            else
                render json: user.errors.full_messages, status: :unprocessable_entity
            end
        else
            render json: {error: "Couldn't find User with id <=#{params["id"]}=>"}, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            render json: {success: "Deleted"}, status: :no_content
        else
            render json: {error: "User not found!"}, status: :unprocessable_entity
        end
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def handle_error(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
