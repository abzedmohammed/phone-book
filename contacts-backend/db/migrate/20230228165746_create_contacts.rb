class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :avatar, :null => true
      t.string :email, :null => true
      t.string :first_name, :null => false
      t.string :last_name, :null => true
      t.string :phone, :null => false
      t.date :custom_date, :null => true
      t.string :custom_date_label, :null => true
      t.string :address, :null => true
      t.string :city, :null => true
      t.string :relationship, :null => true
      t.text :bio, :null => true

      t.timestamps
    end
  end
end
