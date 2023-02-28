class ContactsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_error
    def index
        render json: Contact.all, status: :ok
    end

    def create
        contact = Contact.create!(contact_params)
        if contact.valid?
            render json: contact, status: :created
        else
            render json: contact.errors.full_messages, status: :unprocessable_entity        
        end
    end

    def show
       contact = Contact.find_by(id: params[:id]) 
       if contact 
           render json: contact, status: :ok
        else
            render json: {error: "Couldn't find Contact with id <=#{params["id"]}=>"}, status: :unprocessable_entity
       end
    end

    def update
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.update!(contact_params)
            if contact.valid?
                render json: contact, status: :accepted
            else
                render json: contact.errors.full_messages, status: :unprocessable_entity
            end
        else
            render json: {error: "Couldn't find Contact with id <=#{params["id"]}=>"}, status: :unprocessable_entity
        end
    end

    def destroy
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.destroy
            render json: {success: "Deleted"}, status: :no_content
        else
            render json: {error: "Contact not found!"}, status: :unprocessable_entity
        end
    end


    private

    def contact_params
        params.permit(:avatar, :email, :first_name, :last_name, :phone, :custom_date, :custom_date_label, :address, :city, :relationship, :bio)
    end

    def handle_error(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
