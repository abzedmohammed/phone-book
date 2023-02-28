class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  # has_one :contact_group
  has_many :contacts, through: :contact_groups
end
