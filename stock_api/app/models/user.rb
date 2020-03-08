class User < ApplicationRecord
    #auth and validation
    has_secure_password
    validates :email, uniqueness: true

    #associations
    has_many :transactions 
    has_many :holdings
end
