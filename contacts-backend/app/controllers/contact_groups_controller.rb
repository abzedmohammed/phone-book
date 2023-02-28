class ContactGroupsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_error
    def index
        render json: ContactGroup.all, status: :ok
    end

    def create
        contact_group = ContactGroup.create!(contact_group_params)
        if contact_group.valid?
            render json: contact_group, status: :created
        else
            render json: contact_group.errors.full_messages, status: :unprocessable_entity        
        end
    end

    def show
       contact_group = ContactGroup.find_by(id: params[:id]) 
       if contact_group 
           render json: contact_group, status: :ok
        else
            render json: {error: "Couldn't find ContactGroup with id <=#{params["id"]}=>"}, status: :unprocessable_entity
       end
    end

    def update
        contact_group = ContactGroup.find_by(id: params[:id])
        if contact_group
            contact_group.update!(contact_group_params)
            if contact_group.valid?
                render json: contact_group, status: :accepted
            else
                render json: contact_group.errors.full_messages, status: :unprocessable_entity
            end
        else
            render json: {error: "Couldn't find ContactGroup with id <=#{params["id"]}=>"}, status: :unprocessable_entity
        end
    end

    def destroy
        contact_group = ContactGroup.find_by(id: params[:id])
        if contact_group
            contact_group.destroy
            render json: {success: "Deleted"}, status: :no_content
        else
            render json: {error: "ContactGroup not found!"}, status: :unprocessable_entity
        end
    end


    private

    def contact_group_params
        params.permit(:user_id, :contact_id)
    end

    def handle_error(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
