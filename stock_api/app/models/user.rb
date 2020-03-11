class User < ApplicationRecord
    #auth and validation
    has_secure_password
    validates :email, uniqueness: true
    

    #associations
    has_many :transactions, dependent: :delete_all
    has_many :holdings, dependent: :delete_all
end
