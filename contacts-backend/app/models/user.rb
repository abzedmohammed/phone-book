class User < ApplicationRecord
    validates :username, :password, presence: true
    validates :username, uniqueness: { case_sensitive: false }
    validates :username, length: { minimum: 3, message: " should be atleast 3 characters long" }
    validates :password, confirmation: true, length: { in: 4..20, message: " should be atleast 4 characters long " }

    has_secure_password

    has_one :contact_group, dependent: :destroy
    has_many :contacts, through: :contact_group, dependent: :destroy
end
