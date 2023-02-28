class Contact < ApplicationRecord
    validates :first_name, :phone, presence: true
    validates :phone, uniqueness: { case_sensitive: true }
    validates :custom_date_label, inclusion: { in: %w(birthday anniversary other) }, allow_nil: true
end
