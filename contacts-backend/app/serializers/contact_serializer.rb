class ContactSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :email, :first_name, :last_name, :phone, :custom_date, :custom_date_label, :address, :city, :relationship
end
